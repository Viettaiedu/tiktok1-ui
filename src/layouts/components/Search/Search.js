import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import * as searchServices from '~/services/searchServices';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/Hooks';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [showSpiner, setShowSpiner] = useState(false);

    const inputRef = useRef();
    // debounce => giúp để tránh những re-render không cần thiết , giúp chúng
    // ta tối ưu hóa tính năng ..
    let debounceValue = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounceValue.trim()) {
            return;
        }
        const fetchApi = async () => {
            setShowSpiner(true);
            const res = await searchServices.handle(debounceValue, 'less');
            setSearchResult(res.data);
            setShowSpiner(false);
        };
        fetchApi();
    }, [debounceValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleValue = (e) => {
        if (!e.target.value.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };

    return (

        //Using a wrapper <div> or <span> tag around the reference element
        // solves this by creating a new parentNode context.
        <span>
            <HeadlessTippy
                visible={searchValue && showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('srearch-results')} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <h2 className={cx('search-title')}>Tài khoản</h2>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm tài khoản và video"
                        onChange={handleValue}
                        onFocus={() => {
                            if (!!searchValue) {
                                setShowResult(true);
                            }
                        }}
                    />
                    {!!searchValue && !showSpiner && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {showSpiner && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </span>
    );
}


export default Search;
