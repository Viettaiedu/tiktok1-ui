import classNames from 'classnames/bind';
import style from './Image.module.scss';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';

const cx = classNames.bind(style);
const Image = forwardRef(({ src, alt, className, fallback: fallbackNew = images.noImage, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(fallbackNew);
    };
    const myClassName = cx('wrapper', className, {});
    return <img ref={ref} {...props} className={myClassName} src={fallback || src} alt={alt} onError={handleError} />;
});

export default Image;
