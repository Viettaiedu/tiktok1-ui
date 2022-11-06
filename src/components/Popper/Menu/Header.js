import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// My Imports

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faCircleChevronLeft} />
            </button>
            <span className={cx('header-title')}>{title}</span>
        </header>
    );
}

export default Header;
