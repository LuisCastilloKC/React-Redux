// here will have multiple reducer and with I will combine the reducer
import { combineReducers } from 'redux';
import { productReducer } from './productReducer'

 const reducers = combineReducers({
    allProducts: productReducer
})

export default reducers