import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <h1>Home Client</h1>
            <Link to="/admin">Admin</Link>
        </div>
    );
}

export default Home;
