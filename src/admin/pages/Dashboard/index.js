import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import TopbarItem from './components/TopbarItem';
import Overview from './components/Overview';
import Goals from './components/Goals';
import Revenue from './components/Revenue';
import Schedule from './components/Schedule';

const cx = classNames.bind(styles);

function Dashboard() {
    const location = useLocation();
    const [component, setComponent] = useState(<Goals />);

    const arrCpns = useMemo(() => [
        {
            title: 'Overview',
            path: '/admin',
            component: <Overview />
        },
        {
            title: 'Goals',
            path: '/admin/dashboard/goals',
            component: <Goals />
        },
        {
            title: 'Revenue',
            path: '/admin/dashboard/revenue',
            component: <Revenue />
        },
        {
            title: 'Schedule',
            path: '/admin/dashboard/schedule',
            component: <Schedule />
        },
    ], []);

    useEffect(() => {
        arrCpns.forEach(cpn => {
            if(location.pathname === cpn.path) { 
                setComponent(cpn.component)
            }
        })
    }, [location.pathname, arrCpns]);

    return (
        <div className={cx('wrapper')}>
            <h2>Dashboard</h2>
            <div className={cx('container-nav')}>
                <ul className={cx('nav')}>
                    {arrCpns.map((cpn, index) => {
                        return <TopbarItem key={index} title={cpn.title} to={cpn.path} />;
                    })}
                </ul>
            </div>
            {component}
        </div>
    );
}

export default Dashboard;
