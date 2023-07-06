import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Progress } from 'antd';
import classNames from 'classnames/bind';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card({ titleCard, actualNumber, icon, goalsNumber, titleGoals, percent, strokeColor }) {
    const renderIcon = () => <FontAwesomeIcon icon={icon} />;

    return (
        <div className={cx('card')}>
            <div className={cx('title-card')}>{titleCard}</div>
            <div className={cx('actual-number')}>{actualNumber}</div>
            <div className={cx('chars')}>
                <Progress
                    type="circle"
                    percent={percent}
                    strokeColor={strokeColor}
                    format={() => renderIcon()}
                />
            </div>
            <div className={cx('title-goals')}>{titleGoals}</div>
            <div className={cx('goals-number')}>{goalsNumber}</div>
        </div>
    );
}

export default Card;
