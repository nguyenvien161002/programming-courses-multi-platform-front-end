import classNames from 'classnames/bind';

import { GridStyles } from '~/shared/components/GridStyles';
import Header from './components/Header';
import Tracks from './components/Tracks';
import Actionbar from './components/Actionbar';
import styles from './DefaultLayoutLearning.module.scss';

const cx = classNames.bind(styles);
const cxGrid = classNames.bind(GridStyles);

function DefaultLayoutLearning({ children }) {
    return (
        <section className={cxGrid(['grid', 'fullWidth'])}>
            <div className={cx('wrapper')}>
                <Header />
                <Tracks />
                {children}
                <Actionbar />
            </div>
        </section>
    );
}

export default DefaultLayoutLearning;
