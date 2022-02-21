import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
	name: "root",

	initialState: {
		FormStage: 1,
		GoodFormContribution: "single",
		GoodFormUserInfo: "",
		Shelter: "",
	},

	reducers: {
		formStage: (state, action) => {
			state.FormStage = action.payload;
		},

		formPay: (state, action) => {
			state.GoodFormContribution = action.payload;
		},
		formUser: (state, action) => {
			state.GoodFormUserInfo = action.payload;
		},
		formShelter: (state, action) => {
			state.Shelter = action.payload;
		},
	},
});

export const { formStage, formPay, formUser, formShelter } = rootSlice.actions;
export const reducer = rootSlice.reducer;
