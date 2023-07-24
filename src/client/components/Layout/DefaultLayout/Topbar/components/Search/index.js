import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/shared/components/Popper';
import Content from './Content';
import style from './Search.module.scss';

const cx = classNames.bind(style);

function Search() {
    const [visible, setVisible] = useState(false);
    const [isSearch, setIsSearch] = useState('');
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const onChange = (e) => {
        setIsSearch(e.target.value);
    };

    return (
        <Tippy
            interactive={true}
            content="Tooltip"
            visible={visible}
            onClickOutside={hide}
            placement="bottom-end"
            render={(attrs) => (
                <PopperWrapper>
                    <div className={cx('wrapper-tippy')} tabIndex="-1" {...attrs}>
                        <Content searchContent={isSearch} />
                    </div>
                </PopperWrapper>
            )}
        >
            <div className={cx('wrapper')} onClick={visible ? hide : show}>
                <div className={cx('search-icon')}></div>
                <input className={cx('input')} onChange={onChange} placeholder="Search courses, articles, videos, ..." />
            </div>
        </Tippy>
    );
}

export default Search;
