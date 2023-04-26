import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit"
import {createAsyncThunk} from "@reduxjs/toolkit";
import httpClient from "../services/httpClient";
// import {userApi} from "../services/apiUrls";
// import {IUserProfileInfoStoreData, IUserStoreData} from "../contracts/data/user";
//
// const initialState:IUserStoreData = {
//     first_name: "",
//     last_name: "",
//     mobile: "",
//     avatar: "",
//     wallet: 0,
//     shopping: false,
//     has_address: false,
//     has_ticket: false,
// }
//
// export const fetchUserInfo = createAsyncThunk('user/fetchUserInfo', async () => {
//     const res = await httpClient().get(userApi.user_info)
//     return res?.data?.data
// })
//
// export const userSlice = createSlice({
//     name: 'user',
//     initialState: initialState,
//     reducers:{
//         fetchLoginUserInfo: (state, action:PayloadAction<IUserStoreData>) => action.payload,
//         updateFromProfile: (state, action:PayloadAction<IUserProfileInfoStoreData>) => {
//             state.first_name = action?.payload?.first_name
//             state.last_name = action?.payload?.last_name
//             state.avatar = action?.payload?.avatar
//         },
//         incrementWalletPrice: (state, action:PayloadAction<number>) => {
//             state.wallet = state?.wallet + action?.payload
//         },
//         resetUserStore: () => initialState
//     },
//     extraReducers: {
//         // [fetchUserInfo.pending]: (state, action) => {},
//         // [fetchUserInfo.rejected]: (state, action) => {},
//         [fetchUserInfo.fulfilled.toString()]: (state, action:PayloadAction<IUserStoreData>) => action.payload,
//     }
// })
//
// export const {fetchLoginUserInfo, updateFromProfile, incrementWalletPrice, resetUserStore} = userSlice.actions

// export default userSlice.reducer