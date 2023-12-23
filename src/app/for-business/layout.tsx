import React from "react";

type Props = {
    children : React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <header  className={"text-center mt-5"}>
                <p>Welcome to our site, where you could use our booking system for your company needs</p>
                <p>Our mission is provide an easy to use booking service for small companies around the world</p>
                <p>In order to use the system, please login or register an account below:</p>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}