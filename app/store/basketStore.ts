// import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
// import httpClient from "../services/httpClient";
// import {basketApi} from "../services/apiUrls";
// import {getBasketCodeCookie, storeBasketCodeCookie} from "../helpers/basketHelpers";
// import {IBasketCountData, IBasketStoreData, IProductInBasketData} from "../contracts/data/basket";
// import {getAddressInfoCookie, getAddressInfoCookieForBasket} from "../helpers/addressHelpers";
// import {DeleteBasketType} from "../contracts/enumTypes";
//
// const initialState: IBasketStoreData = {
//     count: {
//         count_items: 0,
//         total_items: 0
//     },
//     products: [],
//     final_price: 0,
//     total_price: 0,
//     status: 'success',
//     loading: false
// }
//
// export const fetchBasketList = createAsyncThunk('basket/fetchBasketList', async () => {
//     const res = await httpClient().get(basketApi.products_list, {params: {basket: getBasketCodeCookie()}})
//     return res?.data
// })
//
// export const fetchBasketItemsCount = createAsyncThunk('basket/fetchBasketItemsCount', async () => {
//     const res = await httpClient().get(basketApi.count, {params: {basket: getBasketCodeCookie()}})
//     return res?.data?.data
// })
//
// export const addProductToBasket = createAsyncThunk('basket/addProductToBasket', async (values: { productId: number, selectionAttributes: Array<number> }) => {
//     const res = await httpClient().post(basketApi.add, {
//         basket: getBasketCodeCookie(), product: values.productId, address: getAddressInfoCookieForBasket(),
//         attributes: values.selectionAttributes
//     })
//     return res?.data?.data
// })
//
// export const incrementProductToBasket = createAsyncThunk('basket/incrementProductToBasket', async (productId: number) => {
//     const res = await httpClient().post(basketApi.add, {
//         basket: getBasketCodeCookie(), product: productId, address: getAddressInfoCookieForBasket(),
//         attributes: []
//     })
//     return res?.data?.data
// })
//
// export const decrementProductFromBasket = createAsyncThunk('basket/decrementProductFromBasket', async (productId: number) => {
//     const res = await httpClient().delete(basketApi.delete, {
//         params: {
//             basket: getBasketCodeCookie(), product: productId, address: getAddressInfoCookieForBasket(),
//             type: DeleteBasketType.DELETE_DECREMENT_TYPE
//         }
//     })
//     return productId
// })
//
// export const removeProductFromBasket = createAsyncThunk('basket/removeProductFromBasket', async (productId: number) => {
//     const res = await httpClient().delete(basketApi.delete, {
//         params: {
//             basket: getBasketCodeCookie(), product: productId, address: getAddressInfoCookieForBasket(),
//             type: DeleteBasketType.DELETE_ROW_TYPE
//         }
//     })
//     return productId
// })
//
// export const basketSlice = createSlice({
//     name: 'basket',
//     initialState: initialState,
//     reducers: {
//         resetBasketStore: () => initialState
//     },
//     extraReducers: {
//         [fetchBasketList.fulfilled.toString()]: (state, action: PayloadAction<Array<IProductInBasketData>>) => {
//             state.products = action.payload
//             state.final_price = calculateFinalPrice(action.payload)
//             state.total_price = calculateTotalPrice(action.payload)
//         },
//         [fetchBasketItemsCount.fulfilled.toString()]: (state, action: PayloadAction<IBasketCountData>) => {
//             state.count = action.payload
//         },
//         // add product to basket
//         [addProductToBasket.pending.toString()]: (state, action) => {
//             state.loading = true
//             state.status = 'success'
//         },
//         [addProductToBasket.fulfilled.toString()]: (state, action: PayloadAction<IProductInBasketData>) => {
//             storeBasketCodeCookie(action.payload.basket_code)
//             state.products.push(action?.payload)
//             state.count.count_items += 1
//             state.count.total_items += 1
//             state.final_price = calculateFinalPrice(state?.products)
//             state.total_price = calculateTotalPrice(state?.products)
//             state.loading = false
//             state.status = 'success'
//         },
//         [addProductToBasket.rejected.toString()]: (state, action) => {
//             state.loading = false
//             state.status = 'error'
//         },
//         // increment product to basket
//         [incrementProductToBasket.pending.toString()]: (state, action) => {
//             state.loading = true
//             state.status = 'success'
//         },
//         [incrementProductToBasket.fulfilled.toString()]: (state, action: PayloadAction<IProductInBasketData>) => {
//             state?.products?.map((item, index) => {
//                 if (item?.product_info?.id === action?.payload?.product_info?.id) {
//                     state.products[index].number += 1
//                 }
//             })
//             state.count.count_items += 1
//             state.final_price = calculateFinalPrice(state?.products)
//             state.total_price = calculateTotalPrice(state?.products)
//             state.loading = false
//             state.status = 'success'
//         },
//         [incrementProductToBasket.rejected.toString()]: (state, action) => {
//             state.loading = false
//             state.status = 'error'
//         },
//         // decrement product from basket
//         [decrementProductFromBasket.pending.toString()]: (state, action) => {
//             state.loading = true
//             state.status = 'success'
//         },
//         [decrementProductFromBasket.fulfilled.toString()]: (state, action: PayloadAction<number>) => {
//             state?.products?.map((item, index) => {
//                 if (item?.product_info?.id === action?.payload) {
//                     if (item?.number > 1) {
//                         state.products[index].number -= 1
//                         state.count.count_items -= 1
//                     } else {
//                         state.products.splice(index, 1)
//                         state.count.total_items -= 1
//                     }
//                 }
//             })
//             state.final_price = calculateFinalPrice(state?.products)
//             state.total_price = calculateTotalPrice(state?.products)
//             state.loading = false
//             state.status = 'success'
//         },
//         [decrementProductFromBasket.pending.toString()]: (state, action) => {
//             state.loading = false
//             state.status = 'error'
//         },
//         // remove product from basket
//         [removeProductFromBasket.pending.toString()]: (state, action) => {
//             state.loading = true
//             state.status = 'success'
//         },
//         [removeProductFromBasket.fulfilled.toString()]: (state, action: PayloadAction<number>) => {
//             state?.products?.map((item, index) => {
//                 if (item?.id === action?.payload) {
//                     state.products.splice(index, 1)
//                     state.count.count_items -= item?.number
//                 }
//             })
//             state.count.total_items -= 1
//             state.final_price = calculateFinalPrice(state?.products)
//             state.total_price = calculateTotalPrice(state?.products)
//             state.loading = false
//             state.status = 'success'
//         },
//         [removeProductFromBasket.rejected.toString()]: (state, action) => {
//             state.loading = false
//             state.status = 'error'
//         },
//     }
// })
//
// const calculateFinalPrice = (products: Array<IProductInBasketData>) => {
//     let sum = 0;
//     products.forEach((item) => {
//         sum += (item?.product_info?.realPrice! * item?.number)
//     })
//     return sum
// }
//
// const calculateTotalPrice = (products: Array<IProductInBasketData>) => {
//     let sum = 0;
//     products.forEach((item) => {
//         sum += (item?.product_info?.price! * item?.number)
//     })
//     return sum
// }
//
// export const {resetBasketStore} = basketSlice.actions
//
// export default basketSlice.reducer