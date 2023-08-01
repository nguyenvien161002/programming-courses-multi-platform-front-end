import classNames from 'classnames/bind';
import styles from './SubmitBtnAuth.module.scss';

const cx = classNames.bind(styles);

function SubmitBtnAuth({ title, onClick, type = 'button' , ...props }) {
    return (
        <button className={cx('wrapper')} type={type} onClick={onClick} {...props}>
            <div className={cx('inner')}>
                <span className={cx('text')}>{title}</span>
            </div>
        </button>
    );
}

export default SubmitBtnAuth;
