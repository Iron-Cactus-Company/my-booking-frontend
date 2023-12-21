'use client'
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {RoutePaths} from "@/shared/const/RoutePaths";


const AuthMainPage = () => {
    const router = useRouter();
    const pathName = usePathname()


    useEffect(() => {
        if (pathName === `${RoutePaths.FOR_BUSINESS_AUTH}` || pathName=== `${RoutePaths.FOR_BUSINESS_AUTH}/`) {
            router.push(`${RoutePaths.FOR_BUSINESS_AUTH_LOGIN}`);
        }
    }, [router, pathName]);

    return (
        <></>
    );
}

export default AuthMainPage;
