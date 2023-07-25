import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ title, href, to, onClick, clsOfBtn, cls, style, props }) {
    let Component = 'button';
    const attr = {
        ...props
    };

    if (href) {
        Component = 'a';
        attr.href = href;
    }

    if (to) {
        Component = Link;
        attr.to = to;
    }

    if (onClick) {
        attr.onClick = onClick;
    }

    return (
        <Fragment>
            <Component {...attr} className={`${cx('btn', clsOfBtn)} ${cls}`} style={style}>
                {title}
            </Component>
        </Fragment>
    );
}

export default Button;
