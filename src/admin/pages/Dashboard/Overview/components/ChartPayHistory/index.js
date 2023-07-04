import { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';
import classNames from 'classnames/bind';

import styles from './ChartPayHistory.module.scss';

const cx = classNames.bind(styles);

function ChartPayHistory() {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    const config = {
        data,
        xField: 'date',
        yField: 'value',
        seriesField: 'country',
        legend: {
            position: 'top',
        },
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <span>Chart Payment History</span>
            </div>
            <div className={cx('content')}>
                <Area {...config} />
            </div>
        </div>
    );
}

export default ChartPayHistory;
