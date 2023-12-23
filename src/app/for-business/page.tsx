'use client'
import {useEffect} from "react";
import {RoutePaths} from "@/shared/const/RoutePaths";
import {useSelector} from "react-redux";
import {selectIsBusinessLoggedIn} from "@/auth";
import useRedirectIfMatchesPath from "@/shared/hooks/useRedirectIfMatchesPath";



export default function ForBusiness () {
    const redirectToIfMatchesPath = useRedirectIfMatchesPath(RoutePaths.FOR_BUSINESS);

    const isBusinessLoggedIn = useSelector(selectIsBusinessLoggedIn);

    useEffect(() => {
        if(isBusinessLoggedIn){
            redirectToIfMatchesPath(RoutePaths.FOR_BUSINESS_SETTINGS);
        }
        else{
            redirectToIfMatchesPath(RoutePaths.FOR_BUSINESS_AUTH_LOGIN);
        }
    }, [isBusinessLoggedIn]);


    return(
        <div>

        </div>
    )
}