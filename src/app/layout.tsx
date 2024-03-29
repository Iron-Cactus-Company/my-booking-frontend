'use client'
import {Inter} from 'next/font/google'
import './globals.css'
import {Providers} from "@/shared/config/Providers";
import Navbar from "@/shared/ui/Navbar";
import {RoutePaths} from "@/shared/const/RoutePaths";
import {store} from "@/shared/config/reduxConfig";
import {selectIsBusinessLoggedIn} from "@/auth";

const inter = Inter({subsets: ['latin']})

// export const metadata: Metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app',
// }

const navMenuItems: NavBarMenuItem[] = [
    { label: 'Home', path: RoutePaths.MAIN},
    { label: 'About', path: RoutePaths.ABOUT },
    // { label: 'Services', path: RoutePaths.SERVICES },
    { label: 'Contact', path: RoutePaths.CONTACT},
    { label: 'For business', path: RoutePaths.FOR_BUSINESS },
];

const navMenuItemsBusiness: NavBarMenuItem[] = [
    { label: 'Home', path: RoutePaths.MAIN},
    { label: 'About', path: RoutePaths.ABOUT },
    // { label: 'Services', path: RoutePaths.SERVICES },
    { label: 'Contact', path: RoutePaths.CONTACT},
    { label: 'Settings', path: RoutePaths.FOR_BUSINESS },
];

// declare type NavBarType = 'guest' | 'business';

function defineNavbarItems(isLoggedIn: boolean): NavBarMenuItem[]{
    if(isLoggedIn) return navMenuItemsBusiness;

    return navMenuItems;
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const storeState =  store.getState();
    const isBusinessLoggedIn =  selectIsBusinessLoggedIn(storeState);

    return (
    <html lang="en" className="h-full bg-white">
    <body className={inter.className + " " + "min-h-full"} >
    <Providers>
        <Navbar menuItems={defineNavbarItems(isBusinessLoggedIn)}/>
    {children}
    </Providers>
</body>
</html>
)
}
