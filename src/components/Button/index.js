import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCableCar } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Button({
    children,
    primary,
    outline,
    disable,
    follow,
    upload,
    small,
    large,
    RightIcon,
    leftIcon,
  
    // prop
    to,
    href,
    onClick,
    
    ...args
}) {
    let Comp = 'button';

    let props = {
        onClick,
        ...args,
    };
    if (disable) {
    } else {
        if (to) {
            props.to = to;
            Comp = Link;
        } else if (href) {
            props.href = href;
            Comp = 'a';
        }
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        disable,
        upload,
        small,
        large,
       
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon || (leftIcon && <FontAwesomeIcon className={cx('icon-left')} icon={faCableCar} />)}
            {upload && <FontAwesomeIcon className={cx('icon-plus')} icon={faPlusSquare} />}
            <span>{children}</span>
            {RightIcon || (RightIcon && <FontAwesomeIcon className={cx('icon-right')} icon={faCableCar} />)}
        </Comp>
    );
}

export default Button;
