const currentUserSelector = (state) => state.auth.currentUser;
const visibilityMoDal = (state) => state.auth.visibilityMoDal;
const getContentModal = (state) => state.auth.contentModal;
const getSignInWithEmail = (state) => state.auth.getSignInWithEmail;
const getSignInWithNumberPhone = (state) => state.auth.signInWithNumberPhone;

export { currentUserSelector, visibilityMoDal, getContentModal, getSignInWithEmail, getSignInWithNumberPhone };
