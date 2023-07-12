import { Fragment, useEffect, useMemo, useState } from 'react';
// import classNames from 'classnames/bind';

import FormControl from '../FormControl';
import FormInput from '../FormInput';
import SubmitBtnAuth from '../SubmitBtnAuth';
// import styles from './FormSignUp.module.scss';

// const cx = classNames.bind(styles);

function FormSignUp() {
    const valPhNumber = useMemo(() => ({
        type: ['text', 'number'],
        name: ['phone', 'phone_code'],
        placeholder: ['Phone number', 'Enter the confirmation code'],
        labelGroup: ['Phone number', 'Sign up with email'],
    }), []);
    const valEmailAddr = useMemo(() => ({
        type: ['email', 'password'],
        name: ['email', 'password'],
        placeholder: ['Email address', 'Enter the password'],
        labelGroup: ['Email', 'Sign up with your phone number'],
    }), []);

    const [isType, setIsType] = useState(valPhNumber.type);
    const [isName, setIsName] = useState(valPhNumber.name);
    const [isPlaceholder, setIsPlaceholder] = useState(valPhNumber.placeholder);
    const [isLabelGroup, setIsLabelGroup] = useState(valPhNumber.labelGroup);
    const [isSignInWithEmail, setIsSignInWithEmail] = useState(false);

    const handleLabelRight = () => {
        setIsSignInWithEmail(!isSignInWithEmail);
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
                    type={'text'}
                    placeholder={'Your first and last name'}
                    name={'display_name'}
                    withStyles={{
                        labelGroup: {
                            left: 'Your name',
                            right: '',
                            handle: () => {},
                        },
                        insideInputTop: false,
                        insideInputBottom: false,
                    }}
                />
            </FormControl>
            <FormControl>
                <FormInput
                    type={isType[0]}
                    placeholder={isPlaceholder[0]}
                    name={isName[0]}
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
                    type={isType[1]}
                    placeholder={isPlaceholder[1]}
                    name={isName[1]}
                    withStyles={{
                        labelGroup: false,
                        insideInputTop: false,
                        insideInputBottom: !isSignInWithEmail,
                    }}
                />
            </FormControl>
            <FormControl display={!isSignInWithEmail}>
                <FormInput
                    type={'number'}
                    placeholder={'Enter the confirmation code'}
                    name={'email_code'}
                    withStyles={{
                        labelGroup: false,
                        insideInputTop: false,
                        insideInputBottom: isSignInWithEmail,
                    }}
                />
            </FormControl>
            <SubmitBtnAuth title={'Sign up'} />
        </Fragment>
    );
}

export default FormSignUp;
