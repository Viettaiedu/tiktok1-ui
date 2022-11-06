import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faQuestion,
    faSearch,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
// End framework

// logo tiktok
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const onChange = (item) => {
    console.log(item);
};

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 300);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* left */}
                <img src={images.logo} alt="Tiktok" />
                {/* between */}
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('srearch-results')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h2 className={cx('search-title')}>Tài khoản</h2>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm tài khoản và video" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </Tippy>
                {/* right */}
                <div className={cx('actions')}>
                    <Button upload>Upload</Button>
                    <Button primary>Log in</Button>

                    <Menu items={MENU_ITEMS} onChange={onChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
