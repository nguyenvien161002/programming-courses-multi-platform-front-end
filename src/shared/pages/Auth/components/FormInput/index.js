import classNames from 'classnames/bind';

import styles from './FormInput.module.scss';
import CountryCodes from '../CountryCodes';

const cx = classNames.bind(styles);

function FormInput({ withStyles, isValid, disabledSendCode, ...inputProps }) {
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
            <div className={cx('input-wrapper', isValid ? 'input-error' : '')}>
                {withStyles.insideInputTop && <CountryCodes />}
                <input {...inputProps} />
                {withStyles.insideInputBottom && (
                    <div className={cx('send-code-btn', disabledSendCode ? 'disabled' : '')}>
                        <span>Send code</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FormInput;
