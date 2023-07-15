import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/admin/components/Popper';
import { styles } from '../Styles';
import Content from './Content';
import Avatar from '~/admin/components/Avatar';

const cx = classNames.bind(styles);

function TippyUserMenu() {
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
            <div onClick={visible ? hide : show}>
                <Avatar fontSize={'0.4rem'} />
            </div>
        </Tippy>
    );
}

export default TippyUserMenu;
