import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
    name: 'client',
    initialState: {
        isBackHome: false,
    },
    reducers: {
        handleBackHome: (state, action) => {
            state.isBackHome = action.payload; /* mutation but run inmutation by IMMER */
        },
    },
});

export default clientSlice;
