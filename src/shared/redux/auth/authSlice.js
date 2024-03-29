import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contentModal: {
        unique: 1,
        titlePage: 'Sign in',
        titleForm: 'Sign in to V3D8',
        dontHaveAcc: {
            title: `Don't have an account yet?`,
            titleLink: 'Sign up',
        },
    },
    contentFormAuth: {
        value: ['', ''],
        type: ['text', 'number'],
        name: ['phone', 'phone_code'],
        placeholder: ['Phone number', 'Enter the confirmation code'],
        labelGroup: ['Phone number', 'Sign in with email'],
    },
    currentUser: null,
    signInWithEmail: false,
    visibilityMoDal: false,
    signInWithNumberPhone: false,
    countryDialCode: '+84',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        handleSignInWithGoogle: (state, action) => {
            state.currentUser = action.payload; /* mutation but run inmutation by IMMER */
        },
        handleSignInWithEmail: (state, action) => {
            state.signInWithEmail = action.payload;
        },
        handleSignOut: (state, action) => {
            state.currentUser = action.payload;
        },
        handleSetContentModal: (state, action) => {
            state.contentModal = action.payload;
        },
        handleResetContentModal: (state) => {
            state.contentModal = initialState.contentModal;
        },
        handleSetContentFormAuth: (state, action) => {
            state.contentFormAuth = action.payload;
        },
        handleResetContentFormAuth: (state) => {
            state.contentFormAuth = initialState.contentFormAuth;
        },
        handleSetVisibilityModal: (state, action) => {
            state.visibilityMoDal = action.payload;
        },
        handleSignInWithNumberPhone: (state, action) => {
            state.signInWithNumberPhone = action.payload;
        },
        handleSetCountryDialCode: (state, action) => {
            state.countryDialCode = action.payload;
        }
    },
});

export default authSlice;
