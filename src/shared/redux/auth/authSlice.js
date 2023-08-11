import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
    },
    reducers: {
        signInWithGoogle: (state, action) => {
            state.currentUser = action.payload; /* mutation but run inmutation by IMMER */
        },
        signOut: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});

export default authSlice;
