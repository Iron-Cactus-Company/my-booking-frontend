import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Providers} from "@/shared/config/Providers";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
    <html lang="en" className="h-full bg-white">
    <body className={inter.className + " " + "h-full"} >
<Providers>
    {children}
</Providers>
</body>
</html>
)
}