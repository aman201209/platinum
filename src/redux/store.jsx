import {persistReducer,persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage";
import counterReducer from "./slice";
import { configureStore } from "@reduxjs/toolkit";



const persist = {
    key:"root",
    storage
}

const persistedReducer = persistReducer(persist , counterReducer)


const store = configureStore({reducer:persistedReducer})
const persistor = persistStore(store)


export {store , persistor}