import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Messenger.module.scss';

const cx = classNames.bind(styles);

function Messenger() {
    const location = useLocation();

    useEffect(() => {
        document.title = `${process.env.REACT_APP_NAME} | Admin - Messenger`;
    }, [location.pathname]);

    return (
        <div>
            <h1>Messenger</h1>
        </div>
    );
}

export default Messenger;
