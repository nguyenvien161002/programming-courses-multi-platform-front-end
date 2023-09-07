import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './TrackItem.module.scss';
import StepItem from '../StepItem';


const cx = classNames.bind(styles);

function TrackItem() {
    return (
        <>
            <div className={cx('wrapper')}>
                <h3 className={cx('title')}>1. IIFE, Scope, Closure</h3>
                <span className={cx('desc')}>9/9 | 01:46:20</span>
                <span className={cx('icon')}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </span>
            </div>
            <div className={cx('track-step-list')}>
                <StepItem />
            </div>
        </>
    );
}

export default TrackItem;
