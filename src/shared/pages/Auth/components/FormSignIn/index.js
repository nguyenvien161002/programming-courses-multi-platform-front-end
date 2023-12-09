import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import classNames from 'classnames/bind';

import { schemasSIWP, schemasSIWE } from '~/shared/schemas';
import { authSlice, getContentFormAuth, getSignInWithEmail, getCountryCodeSelectors } from '~/shared/redux/auth';
import FormInput from '../FormInput';
import FormControl from '../FormControl';
import SubmitBtnAuth from '../SubmitBtnAuth';
import styles from './FormSignIn.module.scss';

const cx = classNames.bind(styles);

function FormSignIn() {
    const dispatch = useDispatch();
    const isSignInWithEmail = useSelector(getSignInWithEmail);
    const countryCode = useSelector(getCountryCodeSelectors);
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
            [name[0]]: '',
            [name[1]]: '',
        },
        validationSchema: isSignInWithEmail ? schemasSIWE : schemasSIWP,
        onSubmit: (values) => {
            values = {
                [name[0]]: isSignInWithEmail ? values[name[0]] : countryCode + values[name[0]],
                [name[1]]: values[name[1]],
            };
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={handleSubmit} autoComplete="off" encType="multipart/form-data">
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
                    value={values[name[1]] || value[1]}
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
            <SubmitBtnAuth title={'Sign in'} type={'submit'} disabled={!isValid || !dirty} />
        </form>
    );
}

export default FormSignIn;
