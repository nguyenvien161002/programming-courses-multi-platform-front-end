import { Rose } from '@ant-design/plots';
import classNames from 'classnames/bind';

import styles from './ChartGenaral.module.scss';

const cx = classNames.bind(styles);

function ChartGenaral() {
    const data = [
        {
            type: 'Orders',
            value: 27,
        },
        {
            type: 'Follower',
            value: 25,
        },
        {
            type: 'Visitor',
            value: 18,
        },
        {
            type: 'Impressions',
            value: 15,
        },
        {
            type: 'Courses',
            value: 10,
        },
        {
            type: 'Reports',
            value: 5,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'value',
        seriesField: 'type',
        radius: 0.9,
        legend: {
            position: 'bottom',
        },
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <span>Chart Genaral</span>
            </div>
            <div className={cx('content')}>
                <Rose {...config} />
            </div>
        </div>
    );
}

export default ChartGenaral;
