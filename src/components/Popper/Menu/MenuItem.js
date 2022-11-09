import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState } from 'react';
import propTypes from 'prop-types';


// my import componets
import Button from '~/components/Button';
const cx = classNames.bind(styles);


function MenuItem({ data, onClick }) {
    const [indexIconLight, setIndexIconLight] = useState(0);
    const className = cx('menu-item', {
        separate: data.separate,
    });
    const togglelight = !!data.toggle;
    return (
        <Button className={className} leftIcon={data.icon} to={data.to} onClick={onClick}>
            <span>{data.title} </span>
            <span
                className={cx('light')}
                onClick={() => {
                    setIndexIconLight((prev) => {
                        return prev === 1 ? 0 : 1;
                    });
                }}
            >
                {togglelight && data.toggle[indexIconLight]}
            </span>
        </Button>
    );
}

MenuItem.propTypes = {
    data : propTypes.object,
    onClick : propTypes.func,
}
export default MenuItem;
