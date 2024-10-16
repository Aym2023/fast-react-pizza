import { createSlice } from "@reduxjs/toolkit";

const intialState = {
username: '',
};


const userSlice = createSlice({
name: 'user',
intialState,
reducers: {
updateName(state , action) {
state.username = action.payload;
},
},
});

export const { updateName  } = userSlice.actions;

export default userSlice.reducer;