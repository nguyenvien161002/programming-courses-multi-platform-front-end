import { Table } from 'antd';

import classNames from 'classnames/bind';
import styles from './TablePayHistory.module.scss';

const cx = classNames.bind(styles);

function TablePayHistory() {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id,
            width: '10%',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            filters: [
                {
                    text: 'Category 1',
                    value: 'Category 1',
                    children: [],
                },
                {
                    text: 'Category 2',
                    value: 'Category 2',
                    children: [],
                },
            ],
            filterMode: 'tree',
            filterSearch: true,
            onFilter: (value, record) => record.name.includes(value),
            width: '12%',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            onFilter: (value, record) => record.address.startsWith(value),
            filterSearch: true,
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            sorter: (a, b) => a.id - b.id,
            width: '10%',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            filters: [
                {
                    text: 'Success',
                    value: 'Success',
                },
                {
                    text: 'Processing',
                    value: 'Processing',
                },
                {
                    text: 'Failed',
                    value: 'Failed',
                },
            ],
            onFilter: (value, record) => record.address.startsWith(value),
            filterSearch: true,
            width: '15%',
        },
        {
            title: 'DateTime',
            dataIndex: 'dateTime',
            filters: [
                {
                    text: 'Hours',
                    value: 'Hours',
                },
                {
                    text: 'Seconds',
                    value: 'Seconds',
                },
            ],
            onFilter: (value, record) => record.address.startsWith(value),
            filterSearch: true,
            width: '15%',
        },
    ];

    const data = [];
    for (let i = 1; i < 100; i++) {
        data.push({
            key: i,
            id: i,
            brand: "Payment",
            description: `Deposit PayPal ${i}`,
            amount: `$${Math.floor(i * Math.random() * 1000)}`,
            status: `Success`,
            dateTime: `04-07-2022 3:16:45`,
        });
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <span>Table Payment History</span>
            </div>
            <div className={cx('content')}>
                <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{
                        y: 280,
                    }}
                />
            </div>
        </div>
    );
}

export default TablePayHistory;
