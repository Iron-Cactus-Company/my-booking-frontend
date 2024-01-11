'use client'
import { useSelector } from "react-redux";
import { selectIsBusinessLoggedIn } from "@/auth";
import { usePathname } from "next/navigation";
import { RoutePaths } from "@/shared/const/RoutePaths";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    const isBusinessLoggedIn = useSelector(selectIsBusinessLoggedIn);
    const routePath = usePathname();

    if (!isBusinessLoggedIn) {
        return (
            <>
                <header className={"text-center mt-5"}>
                    <p>Welcome to our site, where you could use our booking system for your company needs</p>
                    <p>Our mission is to provide an easy-to-use booking service for small companies around the world</p>
                    <p>In order to use the system, please login or register an account below:</p>
                </header>

                <main>{children}</main>
            </>
        );
    } else if (routePath === RoutePaths.FOR_BUSINESS_SETTINGS) {
        return (
            <>
                <header className={"text-center mt-5"}>
                    <h1 className="mb-4">Here you can see all your profile settings also add and control your companies</h1>
                </header>

                <main>{children}</main>
            </>
        );
    } else {
        return (
            <>
                <main>{children}</main>
            </>
        );
    }
}
