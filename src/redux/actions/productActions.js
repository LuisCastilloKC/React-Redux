import { ActionTypes } from '../contants/action-types'
//Create a function to set product from the contants folder. SET_PRODUCTS is inside action-types.js
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}