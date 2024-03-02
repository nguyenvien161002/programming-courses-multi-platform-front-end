import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import axios from 'axios';

import { courseColumns } from '~/admin/components/TableAntd';
import classNames from 'classnames/bind';
import styles from './Courses.module.scss';

const cx = classNames.bind(styles);

function Courses() {
    const [data, setData] = useState([]);
    const [isActive, setIsActive] = useState('free');

    useEffect(() => {
        let config = {
            method: 'GET',
            url: `http://localhost:8080/api/v1/docs/courses/${isActive}`
        };
        axios
            .request(config)
            .then((response) => {
                if(isActive === 'free') {
                    setData(response.data.data.free_courses);
                } else {
                    setData(response.data.data.pro_courses);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [isActive]);

    const handleTabClick = (tab) => {
        setIsActive(tab);
    };

    return (
        <div className={cx('wrapper')}>
            <h2>Courses</h2>
            <div className={cx('container-nav')}>
                <ul className={cx('nav')}>
                    <li className={cx({ 'nav-item': true, active: isActive === 'free' })}>
                        <Link className={cx('nav-link')} onClick={() => handleTabClick('free')}>
                            <p className={cx('nav-item-title')}>Free</p>
                        </Link>
                    </li>
                    <li className={cx({ 'nav-item': true, active: isActive === 'pro' })}>
                        <Link className={cx('nav-link')} onClick={() => handleTabClick('pro')}>
                            <p className={cx('nav-item-title')}>Pro</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={cx('content')}>
                <Table columns={courseColumns} dataSource={data} />
            </div>
        </div>
    );
}

export default Courses;
