import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMoon,
    faQuestion,
    faRightToBracket,
    faSearch,
    faSpinner,
    faToggleOff,
    faToggleOn,
    faUser,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
// End framework

// logo tiktok
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { UploadIcon, MailIcon } from '~/components/Icons';
import Image from '~/components/Image';
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
    { type: '', icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];

const onChange = (item) => {};

// user login

const userItems = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        to: '/@usere4xdc6n1i7',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Nhận xu',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faVideo} />,
        title: 'LIVE studio',
        to: '/studio',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        to: '/setting',
    },

    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Light',
        toggle: [<FontAwesomeIcon icon={faToggleOff} />, <FontAwesomeIcon icon={faToggleOn} />],
    },

    {
        icon: <FontAwesomeIcon icon={faRightToBracket} />,
        title: 'Đăng xuất',
        to: '/logout',
        separate: true,
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 300);
    }, []);
    let userCurrent = true;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* left */}
                <img src={images.logo} alt="Tiktok" />
                {/* between */}
                <HeadlessTippy
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
                </HeadlessTippy>
                {/* right */}

                <div className={cx('actions')}>
                    {userCurrent ? (
                        <>
                            <Button upload>Upload</Button>
                            <Tippy
                                delay={[0, 200]}
                                content="Up load video"
                                placement="bottom"
                                // trigger='click'
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content="Up load video"
                                placement="bottom"
                                // trigger='click'
                            >
                                <button className={cx('action-btn')}>
                                    <MailIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button upload>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={userCurrent ? userItems : MENU_ITEMS} onChange={onChange}>
                        {userCurrent ? (
                            <Image
                                className={cx('action-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1667880000&x-signature=FmH6MGDxXLEMzJ%2BoNkSa7Ug%2BLH4%3D"
                                alt="Nguyenvana"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
