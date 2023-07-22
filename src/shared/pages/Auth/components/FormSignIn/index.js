import { Fragment, useContext, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';

import { FormContext } from '../FormContext';
import FormInput from '../FormInput';
import FormControl from '../FormControl';
import SubmitBtnAuth from '../SubmitBtnAuth';
import styles from './FormSignIn.module.scss';

const cx = classNames.bind(styles);

function FormSignIn() {
    const valPhNumber = useMemo(() => ({
        type: ['text', 'number'],
        name: ['phone', 'phone_code'],
        placeholder: ['Phone number', 'Enter the confirmation code'],
        labelGroup: ['Phone number', 'Sign in with email'],
    }), []);
    const valEmailAddr = useMemo(() => ({
        type: ['email', 'password'],
        name: ['email', 'password'],
        placeholder: ['Email address', 'Enter the password'],
        labelGroup: ['Email', 'Sign in with your phone number'],
    }), []);
    const [isType, setIsType] = useState(valPhNumber.type);
    const [isName, setIsName] = useState(valPhNumber.name);
    const [isPlaceholder, setIsPlaceholder] = useState(valPhNumber.placeholder);
    const [isLabelGroup, setIsLabelGroup] = useState(valPhNumber.labelGroup);
    const [isSignInWithEmail, setIsSignInWithEmail] = useState(false);
    const [isPhone, setIsPhone] = useState('');
    const [isPhoneCode, setIsPhoneCode] = useState('');
    const { handleSIWithEmail } = useContext(FormContext);

    const handleLabelRight = () => {
        handleSIWithEmail();
        setIsPhone('');
        setIsPhoneCode('');
        setIsSignInWithEmail(!isSignInWithEmail);
    };

    const handleOnchangePhone = (e) => {
        return setIsPhone(e.target.value);
    };

    const handleOnchangePhoneCode = (e) => {
        return setIsPhoneCode(e.target.value);
    };

    const handleSubmit = () => {
        console.log('isPhone: ' + isPhone);
        console.log('isPhoneCode: ' + isPhoneCode);
    };

    useEffect(() => {
        if (isSignInWithEmail) {
            setIsName(valEmailAddr.name);
            setIsType(valEmailAddr.type);
            setIsPlaceholder(valEmailAddr.placeholder);
            setIsLabelGroup(valEmailAddr.labelGroup);
        } else {
            setIsName(valPhNumber.name);
            setIsType(valPhNumber.type);
            setIsPlaceholder(valPhNumber.placeholder);
            setIsLabelGroup(valPhNumber.labelGroup);
        }
    }, [isSignInWithEmail, valEmailAddr, valPhNumber]);

    return (
        <Fragment>
            <FormControl>
                <FormInput
                    value={isPhone}
                    type={isType[0]}
                    placeholder={isPlaceholder[0]}
                    name={isName[0]}
                    onChange={handleOnchangePhone}
                    withStyles={{
                        labelGroup: {
                            left: isLabelGroup[0],
                            right: isLabelGroup[1],
                            handle: handleLabelRight,
                        },
                        insideInputTop: !isSignInWithEmail,
                        insideInputBottom: false,
                    }}
                />
            </FormControl>
            <FormControl>
                <FormInput
                    value={isPhoneCode}
                    type={isType[1]}
                    placeholder={isPlaceholder[1]}
                    name={isName[1]}
                    onChange={handleOnchangePhoneCode}
                    withStyles={{
                        labelGroup: false,
                        insideInputTop: false,
                        insideInputBottom: !isSignInWithEmail,
                    }}
                />
            </FormControl>
            <SubmitBtnAuth title={'Sign in'} onClick={handleSubmit} />
        </Fragment>
    );
}

export default FormSignIn;
