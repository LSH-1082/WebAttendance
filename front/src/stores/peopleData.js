import { createSlice } from '@reduxjs/toolkit';

export const peopleDataSlice = createSlice({
    name: "peopleData",
    initialState: {
        userId: "",
        name: "",
        imgUrl: "",
        state: "",
        workTime:[],
    },
    reducers: {
        setDefaultPeopleData: (state, action) => {
            state.userId = action.payload.user_id
            state.name = action.payload.name;
            state.imgUrl = action.payload.imgUrl;
            state.state = action.payload.state;
        },
        setPeopleWorkTime: (state, action) => {
            state.workTime = action.payload;
        }
    },
});

export const {setDefaultPeopleData, setPeopleWorkTime} = peopleDataSlice.actions;

export default peopleDataSlice.reducer;