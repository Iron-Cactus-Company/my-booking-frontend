import { Middleware } from '@reduxjs/toolkit';
import {authEndpoints, authUserActions, isAccessTokenExpired} from "@/auth";
import { LS_KEYS } from '@/shared/const/LS_KEYS';
import { toast } from 'react-toastify';

export const authMiddleware: Middleware = storeAPI => next => action => {

        // Let the action pass to the next middleware or reducer
    const result = next(action);

    const isLogoutPending = authEndpoints.logout.matchPending(action);
    if(isLogoutPending){
        storeAPI.dispatch(authUserActions.logout());
        localStorage.removeItem(LS_KEYS.AUTH_USER);
        toast.success("You have successfully logged out");
        // Stop further execution of actions after logout
        return;
    }
    switch(action.type) {
        case authUserActions.setAccessTokenInfo.toString():
            const updatedTokenData = { ...storeAPI.getState().authUser, accessTokenInfo: action.payload };
            localStorage.setItem(LS_KEYS.AUTH_USER, JSON.stringify(updatedTokenData));
            break;

        // case someActionThatRequiresAccessTokenCheck:
        // case anotherActionThatRequiresAccessTokenCheck:
        //     const authUser = storeAPI.getState().authUser;
        //     if (authUser.accessTokenInfo && isAccessTokenExpired(authUser.accessTokenInfo.accessTokenExpiresAt)) {
        //         // Token is expired, perform necessary actions (e.g., logout)
        //         storeAPI.dispatch(authUserActions.logout());
        //         localStorage.removeItem(LS_KEYS.AUTH_USER);
        //         toast.error("Please login again!");
        //         // Stop further execution of actions after logout
        //         return;
        //     }
        //     break;

        default:
                break;
        }

        return result;
    };

