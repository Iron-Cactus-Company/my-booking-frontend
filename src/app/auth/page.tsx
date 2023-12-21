'use client'
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {RoutePaths} from "@/shared/const/RoutePaths";


const AuthMainPage = () => {
    const router = useRouter();
    const pathName = usePathname()


    useEffect(() => {
        if (pathName === `${RoutePaths.AUTH}` || pathName=== `${RoutePaths.AUTH}/`) {
            router.push(`${RoutePaths.AUTH_LOGIN}`);
        }
    }, [router, pathName]);

    return (
        <></>
    );
}

export default AuthMainPage;
