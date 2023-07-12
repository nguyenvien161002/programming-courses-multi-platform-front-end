import { Fragment, useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { FormContext } from '../FormContext';
import FormInput from '../FormInput';
import FormControl from '../FormControl';
import SubmitBtnAuth from '../SubmitBtnAuth';
import styles from './FormSignIn.module.scss';

const cx = classNames.bind(styles);

function FormSignIn() {
    const valPhNumber = {
        type: ['text', 'number'],
        name: ['phone', 'phone_code'],
        placeholder: ['Phone number', 'Enter the confirmation code'],
        labelGroup: ['Phone number', 'Sign in with email'],
    };
    const valEmailAddr = {
        type: ['email', 'password'],
        name: ['email', 'password'],
        placeholder: ['Email address', 'Enter the password'],
        labelGroup: ['Email', 'Sign in with your phone number'],
    };

    const [isType, setIsType] = useState(valPhNumber.type);
    const [isName, setIsName] = useState(valPhNumber.name);
    const [isPlaceholder, setIsPlaceholder] = useState(valPhNumber.placeholder);
    const [isLabelGroup, setIsLabelGroup] = useState(valPhNumber.labelGroup);
    const [isSignInWithEmail, setIsSignInWithEmail] = useState(false);
    const { handleSIWithEmail } = useContext(FormContext);

    const handleLabelRight = () => {
        handleSIWithEmail();
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
    }, [isSignInWithEmail]);

    return (
        <Fragment>
            <FormControl>
                <FormInput
                    type={isType[0]}
                    placeholder={isPlaceholder[0]}
                    name={isName[0]}
                    withStyles={{
                        labelGroup: {
                            left: isLabelGroup[0],
                            right: isLabelGroup[1],
                            handle: handleLabelRight
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
            <SubmitBtnAuth title={'Sign in'} />
        </Fragment>
    );
}

export default FormSignIn;