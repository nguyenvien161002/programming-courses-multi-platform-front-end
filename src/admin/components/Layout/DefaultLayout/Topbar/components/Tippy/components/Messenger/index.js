import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/admin/components/Popper';
import { styles } from '../Styles';
import Content from './Content';

const cx = classNames.bind(styles);

function TippyMessenger() {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return (
        <Tippy
            interactive={true}
            content="Tooltip"
            visible={visible}
            onClickOutside={hide}
            placement="bottom-end"
            render={(attrs) => (
                <PopperWrapper>
                    <div className={cx('wrapper-user-menu')} tabIndex="-1" {...attrs}>
                        <Content />
                    </div>
                </PopperWrapper>
            )}
        >
            <div className={cx('action-item')}>
                <FontAwesomeIcon icon={faFacebookMessenger} onClick={visible ? hide : show}/>
            </div>
        </Tippy>
    );
}

export default TippyMessenger;
