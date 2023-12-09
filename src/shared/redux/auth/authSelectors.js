const currentUserSelector = (state) => state.auth.currentUser;
const visibilityMoDal = (state) => state.auth.visibilityMoDal;
const getContentModal = (state) => state.auth.contentModal;
const getContentFormAuth = (state) => state.auth.contentFormAuth;
const getSignInWithEmail = (state) => state.auth.signInWithEmail;
const getSignInWithNumberPhone = (state) => state.auth.signInWithNumberPhone;
const getCountryCodeSelectors = (state) => state.auth.countryDialCode;

export {
    currentUserSelector,
    visibilityMoDal,
    getContentModal,
    getSignInWithEmail,
    getSignInWithNumberPhone,
    getContentFormAuth,
    getCountryCodeSelectors
};
