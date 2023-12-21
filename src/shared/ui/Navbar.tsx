'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import {usePathname } from 'next/navigation';

declare global {
    type NavBarMenuItem = {
        label: string;
        path: string;
    };

    type NavbarProps = {
        menuItems: NavBarMenuItem[];
    };
}

const Navbar = ({ menuItems }: NavbarProps) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const pathname = usePathname();

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-lg">
                        <Link href="/">Logo</Link>
                    </div>
                    <div className="hidden lg:flex space-x-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-white hover:text-gray-300 hover:bg-gray-700 hover:rounded transition duration-300
                                    ${pathname === item.path ? 'font-bold' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
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
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`block text-white hover:text-gray-300 hover:bg-gray-700 hover:rounded p-2
                                    ${pathname === item.path ? 'font-bold' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;





