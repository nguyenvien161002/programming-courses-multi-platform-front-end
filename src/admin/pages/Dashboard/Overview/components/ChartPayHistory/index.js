import { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import classNames from 'classnames/bind';

import styles from './ChartPayHistory.module.scss';

const cx = classNames.bind(styles);

function ChartPayHistory() {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'year',
        yField: 'value',
        seriesField: 'category',
        legend: {
            position: 'top',
        },
        yAxis: {
            label: {
                formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
            },
        },
        color: ['#1979C9', '#D62A0D', '#FAA219'],
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <span>Chart Payment History</span>
            </div>
            <div className={cx('content')}>
                <Line {...config} />
            </div>
        </div>
    );
}

export default ChartPayHistory;
