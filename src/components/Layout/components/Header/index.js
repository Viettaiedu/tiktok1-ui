import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
// End framework

// logo tiktok
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
const cx = classNames.bind(styles);
function Header() {

    const [searchResult , setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        },300)
    },[])
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* left */}
                <img src={images.logo} alt="Tiktok" />
                {/* between */}
                <Tippy
                    visible={searchResult.length > 0}
                    interactive 
                        render= {attrs => (
                            <div className={cx('srearch-results')} tabIndex={-1} {...attrs}>
                                     <PopperWrapper>
                                         <h2 className={cx('search-title')}>
                                             Tài khoản
                                         </h2>
                                            <AccountItem/>
                                            <AccountItem/>
                                            <AccountItem/>
                                            <AccountItem/>
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
                <div className={cx('actions')}></div>
            </div>
        </div>
    );
}

export default Header;
