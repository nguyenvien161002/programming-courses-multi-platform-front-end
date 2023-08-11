import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from '~/shared/redux/auth';

const reduxStore = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});

export default reduxStore;
