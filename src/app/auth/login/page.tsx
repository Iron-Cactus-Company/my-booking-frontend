'use client'
import {AuthLoginForm} from "@/auth";
import {useRouter} from "next/navigation";
import {RoutePaths} from "@/shared/const/RoutePaths";
export default function AuthLogin() {

    const router = useRouter()
    function handleSuccessLogin(){
        router.push(RoutePaths.MAIN);
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
           <AuthLoginForm onSuccessLogin={handleSuccessLogin}/>
        </div>
    )
}