import classNames from 'classnames/bind';

import SlideShow from './components/SlideShow';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slide-show')}>
                <SlideShow />
            </div>
            <div className={cx('content')}></div>
        </div>
    );
}

export default Home;
