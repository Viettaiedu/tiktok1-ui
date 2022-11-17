import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import propTypes from 'prop-types';
//
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';

const cx = classNames.bind(styles);
function Main({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
Main.propTypes = {
    children : propTypes.node.isRequired,
}
export default Main;
