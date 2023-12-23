import { useCallback } from 'react';
import {usePathname, useRouter} from 'next/navigation';

const useRedirectIfMatchesPath = (routePath: string) => {
    const router = useRouter();
    const pathName = usePathname();

    const redirectToIfMatchesPath = useCallback(
         (redirectTo: string) => {
            if (pathName === `${routePath}` || pathName === `${routePath}/`) {
                router.push(redirectTo);
            }
        },
        [router, pathName]
    );

    return redirectToIfMatchesPath;
};

export default useRedirectIfMatchesPath;
