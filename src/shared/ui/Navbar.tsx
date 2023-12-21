// import Link from 'next/link';
// import {RoutePaths} from "@/shared/const/RoutePaths";
//
// const Navbar = () => {
//     return (
//         <nav className="bg-gray-800 p-4">
//             <div className="container mx-auto">
//                 <div className="flex items-center justify-between">
//                     <div className="text-white font-bold text-lg">
//                         <Link href="/">
//                            Logo
//                         </Link>
//                     </div>
//                     <div className="flex space-x-4">
//                         <Link className="text-white" href="/">
//                             Home
//                         </Link>
//                         <Link href={RoutePaths.ABOUT} className="text-white">
//                            About
//                         </Link>
//                         <Link href="/services" className="text-white">
//                            Services
//                         </Link>
//                         <Link href="/contact" className="text-white">
//                            Contact
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };
//
// export default Navbar;

'use client'
// 'use client'
// 'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter,usePathname } from 'next/navigation';
import { RoutePaths } from '@/shared/const/RoutePaths';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const pathname = usePathname();


    console.log(pathname);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-lg">
                        <Link href="/">Logo</Link>
                    </div>
                    <div className="hidden lg:flex space-x-4">
                        <Link className={`text-white hover:text-gray-300 hover:bg-gray-700 hover:rounded transition duration-300
                         ${pathname === RoutePaths.MAIN ? 'font-bold' : ''}`} href="/">
                            Home
                        </Link>
                        <Link href={RoutePaths.ABOUT} className={`text-white hover:text-gray-300 hover:bg-gray-700 hover:rounded transition duration-300 
                        ${pathname === RoutePaths.ABOUT ? 'font-bold' : ''}`}>
                            About
                        </Link>
                        <Link href={RoutePaths.SERVICES} className={`text-white hover:text-gray-300 hover:bg-gray-700 hover:rounded transition duration-300
                         ${pathname === RoutePaths.SERVICES ? 'font-bold' : ''}`}>
                            Services
                        </Link>
                        <Link href={RoutePaths.CONTACT} className={`text-white hover:text-gray-300 hover:bg-gray-700 hover:rounded transition duration-300 
                        ${pathname === RoutePaths.CONTACT ? 'font-bold' : ''}`}>
                            Contact
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <button
                            className="text-white focus:outline-none"
                            onClick={handleMobileMenuToggle}
                        >
                            Menu
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden text-center">
                        <Link href="/" className={`block text-white hover:text-gray-300 hover:bg-gray-700 hover:rounded p-2 
                        ${pathname === RoutePaths.MAIN ? 'font-bold' : ''}`}
                              onClick={closeMobileMenu}>
                            Home
                        </Link>
                        <Link href={RoutePaths.ABOUT} className={`block text-white hover:text-gray-300 hover:bg-gray-700 hover:rounded p-2 
                        ${pathname === RoutePaths.ABOUT ? 'font-bold' : ''}`}
                              onClick={closeMobileMenu}>
                            About
                        </Link>
                        <Link href={RoutePaths.SERVICES}
                              className={`block text-white hover:text-gray-300 hover:bg-gray-700 hover:rounded p-2 
                              ${pathname === RoutePaths.SERVICES ? 'font-bold' : ''}`}
                              onClick={closeMobileMenu}>
                            Services
                        </Link>
                        <Link href={RoutePaths.CONTACT}
                              className={`block text-white hover:text-gray-300 hover:bg-gray-700 hover:rounded p-2
                               ${pathname === RoutePaths.CONTACT ? 'font-bold' : ''}`}
                              onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
