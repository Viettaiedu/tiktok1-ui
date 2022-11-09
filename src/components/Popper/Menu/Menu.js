import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/animations/scale.css';
import { useState } from 'react';
import propTypes from 'prop-types';
// My Imports
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // comeback first menu
    const handleOnBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const handleRessetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
            <PopperWrapper className={cx('content')}>
                {history.length > 1 && <Header title={current.title} onBack={handleOnBack} />}
                <div className={cx('menu-scroll')}> {renderItems()}</div>
            </PopperWrapper>
        </div>
    );
    return (
        <Tippy
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            interactive
            offset={[10, 8]}
            placement="bottom-end"
            render={renderResult}
            onHide={handleRessetToFirstPage}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: propTypes.node.isRequired,
    items: propTypes.array,
    hideOnClick: propTypes.bool,
    onChange: propTypes.func,
};
export default Menu;
