import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Createbtn.module.scss';
const cx = classNames.bind(styles);

function CreateBtn() {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return (
        <Tippy
            interactive={true}
            content="Tooltip"
            visible={visible}
            onClickOutside={hide}
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('btn-create')} tabIndex="-1" {...attrs}>
                    <Link to={'/new-post'}>
                        <em>
                            <FontAwesomeIcon icon={faPen} />
                        </em>
                        <span>Writing blog</span>
                    </Link>
                </div>
            )}
        >
            <div className={cx({'wrapper': true, open: visible})} onClick={visible ? hide : show}>
                <FontAwesomeIcon icon={faPlus} className={cx('icon')} />
            </div>
        </Tippy>
    );
}

export default CreateBtn;
