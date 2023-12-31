import { faShoppingCart, faUser, faEye, faCircleNodes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Card from './components/Card';
import ChartPayHistory from './components/ChartPayHistory';
import TablePayHistory from './components/TablePayHistory';
import SocialMedia from './components/SocialMedia';
import ChartGenaral from './components/ChartGenaral';
import ChartCourses from './components/ChartCourses';
import TableCourses from './components/TableCourses';
import styles from './Overview.module.scss';

const cx = classNames.bind(styles);

function Overview() {
    return (
        <div className={cx('wrapper')}>
            <section className={cx(['genaral', 'section'])}>
                <Card
                    titleCard={'Orders'}
                    actualNumber={900}
                    icon={faShoppingCart}
                    titleGoals={'Completed'}
                    goalsNumber={5000}
                    percent={40}
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                />
                <Card
                    titleCard={'Visitors'}
                    actualNumber={1600}
                    icon={faUser}
                    titleGoals={'Increased since yesterday'}
                    goalsNumber={'75%'}
                    percent={75}
                    strokeColor={{
                        '0%': '#f76b1c',
                        '100%': '#fad15c',
                    }}
                />
                <Card
                    titleCard={'Impressions'}
                    actualNumber={100.16}
                    icon={faEye}
                    titleGoals={'Increased since yesterday'}
                    goalsNumber={'15%'}
                    percent={15}
                    strokeColor={{
                        '0%': '#429321',
                        '100%': '#93d243',
                    }}
                />
                <Card
                    titleCard={'Followers'}
                    actualNumber={'2002K'}
                    icon={faCircleNodes}
                    titleGoals={'Decreased since yesterday'}
                    goalsNumber={'40%'}
                    percent={40}
                    strokeColor={{
                        '0%': '#e91e63',
                        '100%': 'red',
                    }}
                />
            </section>
            <section className={cx(['chart-courses', 'section'])}>
                <ChartCourses />
            </section>
            <section className={cx(['table-courses', 'section'])}>
                <TableCourses />
            </section>
            <section className={cx(['center', 'section'])}>
                <div className={cx('center-left')}>
                    <ChartGenaral />
                </div>
                <div className={cx('center-right')}>
                    <SocialMedia />
                </div>
            </section>
            <section className={cx(['chart-pay-history', 'section'])}>
                <ChartPayHistory />
            </section>
            <section className={cx(['table-pay-history', 'section'])}>
                <TablePayHistory />
            </section>
        </div>
    );
}

export default Overview;
