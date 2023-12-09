import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown, faChevronUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { authSlice } from '~/shared/redux/auth';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './CountryCodes.module.scss';
import countryCodes from '~/shared/codes/CountryCodes.json';

const cx = classNames.bind(styles);

function CountryCodes() {
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [isDialCode, setDialCode] = useState('VN +84');
    const [isSelected, setSelected] = useState('VN');
    const [searchTerm, setSearchTerm] = useState('');

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const filteredCountryCodes = countryCodes.filter((countryCode) =>
        countryCode.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <div>
            <Tippy
                interactive={true}
                content="Tooltip"
                visible={visible}
                onClickOutside={hide}
                placement="bottom-start"
                render={(attrs) => (
                    <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                        <div className={cx('search-wrapper')}>
                            <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
                            <input
                                className={cx('search')}
                                placeholder="Tìm kiếm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className={cx('options-wrapper')}>
                            <ul className={cx('options')}>
                                {filteredCountryCodes.map((countryCode, index) => (
                                    <li
                                        className={cx('option')}
                                        key={index}
                                        onClick={() => {
                                            setVisible(false);
                                            setSelected(countryCode.code);
                                            setDialCode(`${countryCode.code} ${countryCode.dial_code}`);
                                            dispatch(authSlice.actions.handleSetCountryDialCode(countryCode.dial_code));
                                        }}
                                    >
                                        <span className={cx('text')}>{countryCode.name}</span> {countryCode.dial_code}
                                        {isSelected === countryCode.code && (
                                            <FontAwesomeIcon className={cx('icon-checked')} icon={faCheck} />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            >
                <div className={cx('inside-input')} onClick={visible ? hide : show}>
                    <div className={cx('label')}>
                        <span>{isDialCode}</span>
                        <FontAwesomeIcon className={cx('icon')} icon={visible ? faChevronUp : faChevronDown} />
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default CountryCodes;
