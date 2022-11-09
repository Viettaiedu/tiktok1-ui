import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCableCar } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Button({
    children,
    outline,
    disable,
    primary,
    follow,
    upload,
    small,
    large,
    rightIcon,
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
            {rightIcon || (rightIcon && <FontAwesomeIcon className={cx('icon-right')} icon={faCableCar} />)}
        </Comp>
    );
}
Button.propTypes = {
    children : PropTypes.node.isRequired,
    outline : PropTypes.bool,
    disable : PropTypes.bool,
    primary : PropTypes.bool,
    follow : PropTypes.bool,
    upload : PropTypes.bool,
    small : PropTypes.bool,
    large : PropTypes.bool,

    rightIcon : PropTypes.node,
    leftIcon : PropTypes.node,

    to : PropTypes.string,
    href : PropTypes.string,

    onClick : PropTypes.func,
}
export default Button;
