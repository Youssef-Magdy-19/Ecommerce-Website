
import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './Reducer';
// import rootReducers from "./reducer/handle"
const store = configureStore({
    reducer: rootReducers,

})

export default store;