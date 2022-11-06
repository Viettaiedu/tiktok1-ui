import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/animations/scale.css';
import { useState } from 'react';

// My Imports
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(styles);
const defaultFn =() =>{};
function Menu({ children, items = [] ,onChange  = defaultFn}) {
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
                        }else{
                            onChange(item)
                        }

                        // setHistory(prev => [...prev,])
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('content')}>
                        {history.length > 1 && <Header 
                        title={'Language'} 
                            onBack={() => {
                                setHistory(prev => prev.slice(0 , prev.length - 1));
                            }}
                        />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
