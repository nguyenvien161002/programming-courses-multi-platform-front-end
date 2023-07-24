import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTiktok, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';

import { GridStyles } from '~/shared/components/GridStyles';
import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
const cxGrid = classNames.bind(GridStyles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <section className={cxGrid(['grid', 'wide'])} style={{ 'maxWidth': '110rem' }}>
                <section className={cxGrid('row')}>
                    <section className={cxGrid(['col', 'c-12', 'm-12', 'l-3'])}>
                        <div className={cx('column')}>
                            <div>
                                <div className={cx('column-top')}>
                                    <Link to={'/'}>
                                        <img className={cx('top-logo')} src={images.logoMini.default} alt="V3D8" />
                                    </Link>
                                    <h2 className={cx('top-slogan')}>Popular Programming Courses</h2>
                                </div>
                                <p className={cx('contact-list')}>
                                    Phone: <Link to="tel:0372.695.578">0372.695.578</Link>
                                    <br />
                                    Email: <Link to="mailto:contact@fullstack.edu.vn">contact@fullstack.edu.vn</Link>
                                    <br />
                                    Address: No. 26 Duong Dinh Nghe, Yen Hoa Ward, Cau Giay District, Hanoi City
                                </p>
                                <div>
                                    <Link
                                        to="https://www.dmca.com/Protection/Status.aspx?id=1b325c69-aeb7-4e32-8784-a0009613323a&amp;refurl=https%3a%2f%2ffullstack.edu.vn%2f&amp;rlo=true"
                                        target="_blank"
                                        rel="noreferrer"
                                        title="DMCA Protected"
                                    >
                                        <img className={cx('dmca')} src={images.dmca} alt="DMCA" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={cxGrid(['col', 'c-12', 'm-4', 'l-2'])}>
                        <div className={cx('column')}>
                            <div>
                                <h2 className={cx('heading')}>ABOUT V3D8</h2>
                                <ul className={cx('list')}>
                                    <li>
                                        <Link to={'/about-us'}>Introduce</Link>
                                    </li>
                                    <li>
                                        <Link to={'/contact-us'}>Contact</Link>
                                    </li>
                                    <li>
                                        <Link to={'/terms'}>Rules</Link>
                                    </li>
                                    <li>
                                        <Link to={'/privacy'}>Security</Link>
                                    </li>
                                    <li>
                                        <Link to={'/careers'}>Job opportunity</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className={cxGrid(['col', 'c-12', 'm-4', 'l-2'])}>
                        <div className={cx('column')}>
                            <div>
                                <h2 className={cx('heading')}>PRODUCT</h2>
                                <ul className={cx('list')}>
                                    <li>
                                        <Link to={'/about-us'}>Game Nester</Link>
                                    </li>
                                    <li>
                                        <Link to={'/contact-us'}>Game CSS Diner</Link>
                                    </li>
                                    <li>
                                        <Link to={'/terms'}>Game CSS Selectors</Link>
                                    </li>
                                    <li>
                                        <Link to={'/privacy'}>Game Froggy</Link>
                                    </li>
                                    <li>
                                        <Link to={'/careers'}>Game Froggy Pro</Link>
                                    </li>
                                    <li>
                                        <Link to={'/careers'}>Game Scoops</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className={cxGrid(['col', 'c-12', 'm-4', 'l-2'])}>
                        <div className={cx('column')}>
                            <div>
                                <h2 className={cx('heading')}>TOOLS</h2>
                                <ul className={cx('list')}>
                                    <li>
                                        <Link to={'/about-us/about-u'}>Create a CV to apply for a job</Link>
                                    </li>
                                    <li>
                                        <Link to={'/contact-us'}>Shorten links</Link>
                                    </li>
                                    <li>
                                        <Link to={'/terms'}>Clip-path maker</Link>
                                    </li>
                                    <li>
                                        <Link to={'/privacy'}>Snippet generator</Link>
                                    </li>
                                    <li>
                                        <Link to={'/careers'}>Hand-to-face warning</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className={cxGrid(['col', 'c-12', 'm-12', 'l-3'])}>
                        <div className={cx('column')}>
                            <div>
                                <div className={cx('column-top')}>
                                    <h2 className={cx('heading')}>V3D8 EDUCATION TECHNOLOGY JSC</h2>
                                </div>
                                <ul className={cx('list')}>
                                    <li>Tax code: 012057864</li>
                                    <li>Date of establishment: 04/03/2022</li>
                                    <li>
                                        Areas: Technology, education, programming. V3D8 builds and develops products
                                        that bring value to the community.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
                <section className={cxGrid('row')}>
                    <section className={cxGrid(['col', 'c-12', 'm-12', 'l-12'])}>
                        <div className={cx('bottom')}>
                            <p className={cx('copyright')}>
                                © 2022 - 2023 V3D8. Vietnam's leading programming learning platform
                            </p>
                            <div className={cx('social-list')}>
                                <a
                                    className={cx(['social-item', 'social-item-first', 'youtube'])}
                                    href="https://www.youtube.com/c/V3D8VNOfficial"
                                    title="V3D8 trên Youtube"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faYoutubeSquare} />
                                </a>
                                <a
                                    className={cx(['social-item', 'facebook'])}
                                    href="https://www.facebook.com/groups/V3D8official"
                                    title="V3D8 trên Facebook"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </a>
                                <a
                                    className={cx(['social-item', 'tiktok'])}
                                    href="https://www.tiktok.com/@V3D8official"
                                    title="V3D8 trên Tiktok"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faTiktok} />
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </footer>
    );
}

export default Footer;
