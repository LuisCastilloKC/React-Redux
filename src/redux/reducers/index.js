// here will have multiple reducer and with I will combine the reducer
import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer'

 const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
})

export default reducers