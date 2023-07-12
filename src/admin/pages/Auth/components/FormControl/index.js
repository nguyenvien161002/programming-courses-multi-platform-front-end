import classNames from 'classnames/bind';

import styles from './FormControl.module.scss';

const cx = classNames.bind(styles);

function FormControl({ display, children }) {
    return (
        <div className={cx('wrapper', {'d-none': display})}>
            {children}
        </div>
    );
}

export default FormControl;
