import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/shared/components/Popper';
import { styles } from '../Styles';
import Content from './Content';

const cx = classNames.bind(styles);

function MyCourses() {
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
            <div className={cx('action-item')} onClick={visible ? hide : show}>
                <button className={cx('btn-my-courses')}>My Courses</button>
            </div>
        </Tippy>
    );
}

export default MyCourses;
