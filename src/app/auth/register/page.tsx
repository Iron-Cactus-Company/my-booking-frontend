'use client'
import {AuthRegisterForm} from "@/auth";

export default function AuthRegister() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <AuthRegisterForm/>
        </div>
    )
}