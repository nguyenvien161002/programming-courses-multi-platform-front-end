import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import classNames from 'classnames/bind';

import { schemasSUWE, schemasSUWP } from '~/shared/schemas';
import { authSlice, getContentFormAuth, getSignInWithEmail } from '~/shared/redux/auth';
import FormControl from '../FormControl';
import FormInput from '../FormInput';
import SubmitBtnAuth from '../SubmitBtnAuth';
import styles from './FormSignUp.module.scss';

const cx = classNames.bind(styles);

function FormSignUp() {
    const dispatch = useDispatch();
    const isSignInWithEmail = useSelector(getSignInWithEmail);
    const { value, type, name, placeholder, labelGroup } = useSelector(getContentFormAuth);

    const handleLabelRight = () => {
        resetForm();
        dispatch(authSlice.actions.handleSignInWithEmail(!isSignInWithEmail));
        dispatch(
            !isSignInWithEmail
                ? authSlice.actions.handleSetContentFormAuth({
                      value: ['', ''],
                      type: ['email', 'password'],
                      name: ['email', 'password'],
                      placeholder: ['Email address', 'Enter the password'],
                      labelGroup: ['Email', 'Sign in with your phone number'],
                  })
                : authSlice.actions.handleResetContentFormAuth(),
        );
    };

    const { values, errors, touched, isValid, dirty, resetForm, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: {
            display_name: '',
            [name[0]]: '',
            [name[1]]: '',
            ...(isSignInWithEmail ? { email_code: '' } : {}),
        },
        validationSchema: isSignInWithEmail ? schemasSUWE : schemasSUWP,
        onSubmit: (values) => {
            values = {
                display_name: values.display_name,
                [name[0]]: values[name[0]],
                [name[1]]: values[name[1]],
                ...(isSignInWithEmail ? { email_code: values.email_code } : {}),
            };
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={handleSubmit} autoComplete="off" encType="multipart/form-data">
            <FormControl>
                <FormInput
                    value={values.display_name || value[0]}
                    type={'text'}
                    placeholder={'Your first and last name'}
                    name={'display_name'}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    withStyles={{
                        labelGroup: {
                            left: 'Your name',
                            right: '',
                            handle: () => {},
                        },
                        insideInputTop: false,
                        insideInputBottom: false,
                    }}
                    isValid={!!touched.display_name ? errors.display_name !== undefined : false}
                />
                {errors.display_name && touched.display_name && (
                    <span className={cx('message-error')}>{errors.display_name}</span>
                )}
            </FormControl>
            <FormControl>
                <FormInput
                    value={values[name[0]] || value[0]}
                    type={type[0]}
                    placeholder={placeholder[0]}
                    name={name[0]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    withStyles={{
                        labelGroup: {
                            left: labelGroup[0],
                            right: labelGroup[1],
                            handle: handleLabelRight,
                        },
                        insideInputTop: !isSignInWithEmail,
                        insideInputBottom: false,
                    }}
                    isValid={!!touched[name[0]] ? errors[name[0]] !== undefined : false}
                />
                {errors[name[0]] && touched[name[0]] && <span className={cx('message-error')}>{errors[name[0]]}</span>}
            </FormControl>
            <FormControl>
                <FormInput
                    value={values[name[1]] || value[0]}
                    type={type[1]}
                    placeholder={placeholder[1]}
                    name={name[1]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    withStyles={{
                        labelGroup: false,
                        insideInputTop: false,
                        insideInputBottom: !isSignInWithEmail,
                    }}
                    isValid={!!touched[name[1]] ? errors[name[1]] !== undefined : false}
                    disabledSendCode={!!touched[name[0]] ? errors[name[0]] !== undefined : true}
                />
                {errors[name[1]] && touched[name[1]] && <span className={cx('message-error')}>{errors[name[1]]}</span>}
            </FormControl>
            <FormControl display={!isSignInWithEmail}>
                <FormInput
                    value={values.email_code || value[0]}
                    type={'number'}
                    placeholder={'Enter the confirmation code'}
                    name={'email_code'}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    withStyles={{
                        labelGroup: false,
                        insideInputTop: false,
                        insideInputBottom: isSignInWithEmail,
                    }}
                    isValid={!!touched.email_code ? errors.email_code !== undefined : false}
                    disabledSendCode={!!touched.email_code ? errors.email_code !== undefined : true}
                />
                {errors.email_code && touched.email_code && (
                    <span className={cx('message-error')}>{errors.email_code}</span>
                )}
            </FormControl>
            <SubmitBtnAuth title={'Sign up'} type={'submit'} disabled={!isValid || !dirty} />
        </form>
    );
}

export default FormSignUp;
