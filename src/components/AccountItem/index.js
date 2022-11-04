import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return ( 

        <div  className={cx('wrapper')}>
                <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/10ba5fd695145d8526746fd2e8957fb6~c5_300x300.webp?x-expires=1667703600&x-signature=lDv%2B5QseVO2EqLC0rdc3Fskdddk%3D" alt='Hoa' />
                <div className={cx('info')}>
                    <p className={cx('name')}>
                        <span>Nguyễn Văn A</span>
                        <FontAwesomeIcon icon={faCircleCheck}/>
                    </p>
                    <span className={cx('username')}>nguyenvana</span>
                </div>
        </div>
     );
}

export default AccountItem;