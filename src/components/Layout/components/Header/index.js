import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMoon,
    faQuestion,
    faRightToBracket,
    faToggleOff,
    faToggleOn,
    faUser,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
// End framework

// logo tiktok
import routesConfig from '~/config/routes';
import images from '~/assets/images';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { UploadIcon, MailIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

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
    let userCurrent = true;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* left */}
                <Link to={routesConfig.home}>
                   
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                {/* between */}

                <Search />
                {/* right */}

                <div className={cx('actions')}>
                    {userCurrent ? (
                        <>
                            <Button upload>Upload</Button>
                            <Tippy
                                delay={[0, 200]}
                                content="Hộp thư"
                                placement="bottom"
                                // trigger='click'
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content="Tin nhắn"
                                placement="bottom"
                                // trigger='click'
                            >
                                <button className={cx('action-btn')}>
                                    <MailIcon />
                                    <span className={cx('amount')}>24</span>
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
                            <button className={cx('more-btn')} >
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
