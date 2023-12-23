'use client'
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {RoutePaths} from "@/shared/const/RoutePaths";
import useRedirectIfMatchesPath from "@/shared/hooks/useRedirectIfMatchesPath";


const AuthMainPage = () => {
    // const router = useRouter();
    // const pathName = usePathname()
    //
    //
    // useEffect(() => {
    //     if (pathName === `${RoutePaths.AUTH}` || pathName=== `${RoutePaths.AUTH}/`) {
    //         router.push(`${RoutePaths.AUTH_REGISTER}`);
    //     }
    // }, [router, pathName]);


    // useRedirectIfMatchesPath(RoutePaths.AUTH)(RoutePaths.AUTH_REGISTER);

    return (
        <>lol</>
    );
}

export default AuthMainPage;
