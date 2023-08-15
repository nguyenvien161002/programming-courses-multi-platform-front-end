import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from '~/shared/redux/auth';
import { clientSlice } from '~/shared/redux/client';

const reduxStore = configureStore({
    reducer: {
        auth: authSlice.reducer,
        client: clientSlice.reducer,
    },
});

export default reduxStore;
