'use client'
import {RoutePaths} from "@/shared/const/RoutePaths";
import useRedirectIfMatchesPath from "@/shared/hooks/useRedirectIfMatchesPath";


const AuthMainPage = () => {


    useRedirectIfMatchesPath(RoutePaths.FOR_BUSINESS_AUTH)(RoutePaths.FOR_BUSINESS_AUTH_LOGIN);

    return (
        <></>
    );
}

export default AuthMainPage;
