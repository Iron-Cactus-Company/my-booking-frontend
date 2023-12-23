
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import {StateSchema} from "./StateSchema";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import {setupListeners} from "@reduxjs/toolkit/query";
import {envHelper} from "@/shared/const/envHelper";
import {authMiddleware,authUserReducer,authApi} from "@/auth";
import {companyApi} from "@/company";


const createNoopStorage= () => {
    return {
        getItem(_key: any){
            return Promise.resolve(null)
        },
        setItem(_key: any, value: any){
            return Promise.resolve(value)
        },
        removeItem(_key: any){
            return Promise.resolve()
        }

    }
}

const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();


export function createReduxStore(initialState?: StateSchema) {

    const rootReducer = combineReducers({
        authUser: authUserReducer,
        [authApi.reducerPath]: authApi.reducer,
        [companyApi.reducerPath]: companyApi.reducer,
    });


    const persistConfig = {
        key: 'root',
        storage,
        blacklist: [authApi.reducerPath]
    };


    const persistedReducer = persistReducer(persistConfig, rootReducer);


    const store = configureStore({
        // reducer: rootReducer,
        reducer: persistedReducer,
        //only in dev mode
        devTools: envHelper.isDevMode,

        // @ts-ignore
        preloadedState: initialState,

        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(
                authApi.middleware,
                companyApi.middleware,
                authMiddleware,
            ),

    });

    const persistor = persistStore(store);

    setupListeners(store.dispatch);

    return { storage, store, persistor };

}

