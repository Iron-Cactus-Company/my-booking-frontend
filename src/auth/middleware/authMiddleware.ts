import { Middleware } from '@reduxjs/toolkit';
import {authEndpoints, authUserActions} from "@/auth";
import { LS_KEYS } from '@/shared/const/LS_KEYS';

export const authMiddleware: Middleware = storeAPI => next => action => {

        // Let the action pass to the next middleware or reducer
    const result = next(action);

    const isLogoutPending = authEndpoints.logout.matchPending(action);
    if(isLogoutPending){
        storeAPI.dispatch(authUserActions.logout());
        localStorage.removeItem(LS_KEYS.AUTH_USER);
        // navigatorHelper.navigate?.(RoutePath.auth_session_exp);
    }
    switch(action.type) {
        case authUserActions.setAccessTokenInfo.toString():
            const updatedTokenData = { ...storeAPI.getState().authUser, accessTokenInfo: action.payload };
            localStorage.setItem(LS_KEYS.AUTH_USER, JSON.stringify(updatedTokenData));
            break;

        default:
                break;
        }

        return result;
    };

