import classNames from 'classnames/bind'
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                    <h2>Inner</h2>
            </div>
        </div>
    )
}

export default Header;