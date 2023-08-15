import { useEffect, useMemo, useState } from 'react';
import { useFormik } from 'formik';
import classNames from 'classnames/bind';

import { schemasSIWP, schemasSIWE } from '~/shared/schemas';
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
    const [isValue, setIsValue] = useState('');
    const [isPlaceholder, setIsPlaceholder] = useState(valPhNumber.placeholder);
    const [isLabelGroup, setIsLabelGroup] = useState(valPhNumber.labelGroup);
    const [isSignInWithEmail, setIsSignInWithEmail] = useState(false);

    const handleLabelRight = () => {
        resetForm();
        setIsSignInWithEmail(!isSignInWithEmail);
    };

    useEffect(() => {
        setIsValue('');
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

    const { values, errors, touched, isValid, dirty, resetForm, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: {
            [isName[0]]: '',
            [isName[1]]: '',
        },
        validationSchema: isSignInWithEmail ? schemasSIWE : schemasSIWP,
        onSubmit: (values) => {
            values = {
                [isName[0]]: values[isName[0]],
                [isName[1]]: values[isName[1]],
            };
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={handleSubmit} autoComplete="off" encType="multipart/form-data">
            <FormControl>
                <FormInput
                    value={values[isName[0]] || isValue}
                    type={isType[0]}
                    placeholder={isPlaceholder[0]}
                    name={isName[0]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    withStyles={{
                        labelGroup: {
                            left: isLabelGroup[0],
                            right: isLabelGroup[1],
                            handle: handleLabelRight,
                        },
                        insideInputTop: !isSignInWithEmail,
                        insideInputBottom: false,
                    }}
                    isValid={!!touched[isName[0]] ? errors[isName[0]] !== undefined : false}
                />
                {errors[isName[0]] && touched[isName[0]] && (
                    <span className={cx('message-error')}>{errors[isName[0]]}</span>
                )}
            </FormControl>
            <FormControl>
                <FormInput
                    value={values[isName[1]] || isValue}
                    type={isType[1]}
                    placeholder={isPlaceholder[1]}
                    name={isName[1]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    withStyles={{
                        labelGroup: false,
                        insideInputTop: false,
                        insideInputBottom: !isSignInWithEmail,
                    }}
                    isValid={!!touched[isName[1]] ? errors[isName[1]] !== undefined : false}
                    disabledSendCode={!!touched[isName[0]] ? errors[isName[0]] !== undefined : true}
                />
                {errors[isName[1]] && touched[isName[1]] && (
                    <span className={cx('message-error')}>{errors[isName[1]]}</span>
                )}
            </FormControl>
            <SubmitBtnAuth title={'Sign in'} type={'submit'} disabled={!isValid || !dirty} />
        </form>
    );
}

export default FormSignIn;
