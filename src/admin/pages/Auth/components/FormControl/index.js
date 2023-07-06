import classNames from 'classnames/bind';

import styles from './FormControl.module.scss';
import images from '~/admin/assets/images';
import FormInput from '../FormInput';

const cx = classNames.bind(styles);

function FormControl() {
    return (
        <>
            <div className={cx('wrapper')}>
                <FormInput />
            </div>
            <div className={cx('wrapper')}>
                <FormInput />
            </div>
        </>
    );
}

export default FormControl;
