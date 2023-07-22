import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { GridStyles } from '~/shared/components/GridStyles';
import CommonItem from '../CommonItem';
import styles from './ScrollList.module.scss';

const cx = classNames.bind(styles);
const cxGrid = classNames.bind(GridStyles);

function ScrollList({ title, isNew, courses, subHeading, toViewAll, titleViewAll }) {
    return (
        <div className={cx('wrapper')}>
            <div>
                {subHeading && (
                    <p className={cx('sub-heading')}>
                        <strong>333.934+</strong> người khác đã học
                    </p>
                )}
                <div className={cx('heading-wrap')}>
                    <h2 className={cx('heading')}>
                        <Link target="_self" to={toViewAll}>
                            {title}
                            <span className={cx({ 'label-new': true, 'd-none': !isNew })}>Mới</span>
                        </Link>
                    </h2>
                    {toViewAll && (
                        <Link target="_self" to={toViewAll} className={cx('view-all')}>
                            {titleViewAll}
                            <FontAwesomeIcon icon={faChevronRight} className={cx('view-all-icon')} />
                        </Link>
                    )}
                </div>
            </div>
            <div className={cx('body')}>
                <section className={cxGrid('row')}>
                    {courses &&
                        courses.map((course, index) => (
                            <section key={index} className={cxGrid(['col', 'c-12', 'm-4', 'l-3'])}>
                                <CommonItem {...course} />
                            </section>
                        ))}
                </section>
            </div>
        </div>
    );
}

export default ScrollList;
