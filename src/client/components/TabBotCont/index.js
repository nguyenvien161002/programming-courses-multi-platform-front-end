import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './TopBotCont.module.scss';

const cx = classNames.bind(styles);

function TopBotCont({ title, desc, titleBtn, srcThumb, href, to }) {
    let Cpn = 'a';
    const attri = {};

    if (href) {
        attri.href = href;
        attri.target = "_blank";
        attri.rel="noopener";
    }

    if (to) {
        Cpn = Link
        attri.to = to;
    }

    return (
        <div className={cx('suggestion-box')}>
            <div className={cx('info')}>
                <h2>{title}</h2>
                <p>{desc}</p>
                <Cpn
                    className={cx('cta')}
                    {...attri}
                >
                    {titleBtn}
                </Cpn>
            </div>
            <div className={cx('image')}>
                <img src={srcThumb} alt={title} />
            </div>
        </div>
    );
}

export default TopBotCont;
