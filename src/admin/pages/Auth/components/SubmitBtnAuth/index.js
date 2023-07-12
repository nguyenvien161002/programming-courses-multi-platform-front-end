import classNames from 'classnames/bind';
import styles from './SubmitBtnAuth.module.scss';

const cx = classNames.bind(styles);

function SubmitBtnAuth({ title }) {
    return (
        <button className={cx('wrapper')} type="button">
            <div className={cx('inner')}>
                <span className={cx('text')}>{title}</span>
            </div>
        </button>
    );
}

export default SubmitBtnAuth;
