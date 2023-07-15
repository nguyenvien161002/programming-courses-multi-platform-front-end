import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './FormInput.module.scss';

const cx = classNames.bind(styles);

function FormInput({ withStyles, ...inputProps }) {

    return (
        <div className={cx('wrapper')}>
            {withStyles.labelGroup && (
                <div className={cx('label-group')}>
                    <label className={cx({ label: true, 'd-none': !withStyles.labelGroup.left })}>
                        {withStyles.labelGroup.left}
                    </label>
                    <label
                        className={cx({ label: true, 'cursor-pointer': true, 'd-none': !withStyles.labelGroup.right })}
                        onClick={withStyles.labelGroup.handle}
                    >
                        {withStyles.labelGroup.right}
                    </label>
                </div>
            )}
            <div className={cx('input-wrapper')}>
                {withStyles.insideInputTop && (
                    <div className={cx('inside-input')}>
                        <div className={cx('label')}>
                            <span>VN +84</span>
                            <FontAwesomeIcon className={cx('icon')} icon={faChevronDown} />
                        </div>
                    </div>
                )}
                <input {...inputProps} />
                {withStyles.insideInputBottom && (
                    <div className={cx('right-btn')}>
                        <span>Send code</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FormInput;
