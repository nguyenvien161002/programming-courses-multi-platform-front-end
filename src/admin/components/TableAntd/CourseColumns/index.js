import { Button, Space } from 'antd';

const courseColumns = [
    {
        title: 'ID',
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id,
        width: '6%',
    },
    {
        title: 'Title',
        dataIndex: 'title',
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
        title: 'Description',
        dataIndex: 'description',
        sorter: (a, b) => a.view - b.view,
    },
    {
        title: 'Student',
        dataIndex: 'studentsCount',
        sorter: (a, b) => a.visits - b.visits,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        sorter: (a, b) => a.comments - b.comments,
    },
    {
        title: 'Video Type',
        dataIndex: 'videoType',
        sorter: (a, b) => a.sales - b.sales,
        width: '10%',
    },
    {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
            <Space size="middle">
                <Button type="primary" danger>Delete</Button>
                <Button type="primary" style={{ backgroundColor: '#ffc107' }}>Edit</Button>
                <Button type="primary" >Details</Button>
            </Space>
        ),
        width: '20%'
    },
];

export default courseColumns;