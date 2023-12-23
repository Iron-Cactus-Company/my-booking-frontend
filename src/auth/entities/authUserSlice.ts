"use client"
import { LS_KEYS } from "@/shared/const/LS_KEYS";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PURGE} from "redux-persist";
import {StateSchema} from "@/shared/config/reduxConfig";

let storedAuthUser;

if (typeof localStorage !== 'undefined'){
    storedAuthUser = localStorage.getItem(LS_KEYS.AUTH_USER);
}


const parsedAuthUser: AuthUserSchema | undefined = storedAuthUser
    ? JSON.parse(storedAuthUser)
    : undefined;


const initialState: AuthUserSchema = {
    accessTokenInfo: parsedAuthUser?.accessTokenInfo,
};

export const authUserSlice = createSlice({
    name: "authUser",
    initialState: initialState,

    extraReducers: (builder) => {
        builder.addCase(PURGE, (state) => {
            // This extra reducer handles the PURGE action from redux-persist.
            // It resets the state to its initial values, effectively clearing
            // the persisted state when a purge is triggered.
            state.accessTokenInfo = undefined
        });
    },

    reducers: {

        setAccessTokenInfo: (state, action: PayloadAction<AccessTokenInfo>) => {
            state.accessTokenInfo = action.payload;
        },

        logout: (state) => {
            state.accessTokenInfo = undefined
        },

    }
});

export const { actions: authUserActions } = authUserSlice;
export const { reducer: authUserReducer } = authUserSlice;


// Selector to get the whole authUser state
export const selectAuthUserState = (state: StateSchema) => state.authUser;


// Selector to get the access token info from the authUser state
export const selectAccessTokenInfo = (state: StateSchema) => state.authUser.accessTokenInfo;

export const selectIsBusinessLoggedIn = (state: StateSchema): boolean => {
    const accessTokenExpiresAt = state.authUser.accessTokenInfo?.accessTokenExpiresAt;
    if(!accessTokenExpiresAt)  return false;
    // Check if the accessTokenExpiresAt is not expired
    return new Date(accessTokenExpiresAt * 1000) > new Date();
};
