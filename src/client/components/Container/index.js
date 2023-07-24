import classNames from 'classnames/bind';

import { GridStyles } from '~/shared/components/GridStyles';
import styles from './Container.module.scss';

const cx = classNames.bind(styles);
const cxGrid = classNames.bind(GridStyles);

function Container({ children }) {
    return (
        <section className={cxGrid(['grid', 'fullWidth'])}>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>{children}</div>
            </div>
        </section>
    );
}

export default Container;
