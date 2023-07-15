import classNames from 'classnames/bind';

import styles from './Createbtn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function CreateBtn() {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon icon={faPlus} className={cx('icon')} />
        </div>
    );
}

export default CreateBtn;
