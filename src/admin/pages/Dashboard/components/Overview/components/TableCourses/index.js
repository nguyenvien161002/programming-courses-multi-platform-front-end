import { Table } from 'antd';

import classNames from 'classnames/bind';
import styles from './TableCourses.module.scss';

const cx = classNames.bind(styles);

function TableCourses() {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id,
            width: '10%',
        },
        {
            title: 'Name',
            dataIndex: 'name',
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
            onFilter: (value, record) => record.name.includes(value),
            filterSearch: true,
        },
        {
            title: 'Views',
            dataIndex: 'view',
            sorter: (a, b) => a.view - b.view,
            width: '14%',
        },
        {
            title: 'Visits',
            dataIndex: 'visits',
            sorter: (a, b) => a.visits - b.visits,
            width: '14%',
        },
        {
            title: 'Comments',
            dataIndex: 'comments',
            sorter: (a, b) => a.comments - b.comments,
            width: '14%',
        },
        {
            title: 'Sales',
            dataIndex: 'sales',
            sorter: (a, b) => a.sales - b.sales,
            width: '14%',
        },
    ];

    const data = [];
    for (let i = 1; i < 100; i++) {
        data.push({
            key: i,
            id: i,
            name: 'Javascript',
            view: `${Math.floor(i * Math.random() * 10000)}`,
            visits: `${Math.floor(i * Math.random() * 10000)}`,
            comments: `${Math.floor(i * Math.random() * 1000)}`,
            sales: `${Math.floor(i * Math.random() * 100)}`,
        });
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <span>Table Courses</span>
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

export default TableCourses;
