import classNames from 'classnames/bind';
import styles from './SubmitBtnAuth.module.scss';

const cx = classNames.bind(styles);

function SubmitBtnAuth({ title, onClick }) {
    return (
        <button className={cx('wrapper')} type="button" onClick={onClick}>
            <div className={cx('inner')}>
                <span className={cx('text')}>{title}</span>
            </div>
        </button>
    );
}

export default SubmitBtnAuth;
