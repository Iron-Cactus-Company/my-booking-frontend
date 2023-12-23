export enum AppRoutesLinks {
    AUTH = "AUTH",
    AUTH_LOGIN = "AUTH_LOGIN",
    AUTH_REGISTER = "AUTH_REGISTER",
    AUTH_LOGIN_FPW = "AUTH_LOGIN_FPW",
    AUTH_LOGOUT = "AUTH_LOGOUT",
    // AUTH_SESSION_EXP = "AUTH_SESSION_EXP",

    FOR_BUSINESS = "FOR_BUSINESS",
    FOR_BUSINESS_SETTINGS = "FOR_BUSINESS_SETTINGS",
    FOR_BUSINESS_AUTH = "FOR_BUSINESS_AUTH",
    FOR_BUSINESS_AUTH_LOGIN = "FOR_BUSINESS_AUTH_LOGIN",
    FOR_BUSINESS_AUTH_REGISTER = "FOR_BUSINESS_AUTH_REGISTER",
    FOR_BUSINESS_AUTH_LOGOUT = "FOR_BUSINESS_AUTH_LOGOUT",

    MAIN = "MAIN",
    ABOUT = "ABOUT",
    SERVICES = "SERVICES",
    CONTACT = "CONTACT",


    NOT_FOUND = "NOT_FOUND",
    NOT_FOUND_CATCH = "NOT_FOUND_CATCH",
}



export const RoutePaths: Record<AppRoutesLinks, string> = {

    [AppRoutesLinks.AUTH]: "/auth",
    [AppRoutesLinks.AUTH_REGISTER]: "/auth/register",
    [AppRoutesLinks.AUTH_LOGIN]: "/auth/login",
    [AppRoutesLinks.AUTH_LOGIN_FPW]: "/auth/login/forgottenPassword",
    [AppRoutesLinks.AUTH_LOGOUT]: "/auth/logout",
    // [AppRoutesLinks.AUTH_SESSION_EXP]: "/auth/sessionExpired",

    [AppRoutesLinks.FOR_BUSINESS]: "/for-business",
    [AppRoutesLinks.FOR_BUSINESS_SETTINGS]: "/for-business/settings",
    [AppRoutesLinks.FOR_BUSINESS_AUTH]: "/for-business/auth",
    [AppRoutesLinks.FOR_BUSINESS_AUTH_LOGIN]: "/for-business/auth/login",
    [AppRoutesLinks.FOR_BUSINESS_AUTH_REGISTER]: "/for-business/auth/register",
    [AppRoutesLinks.FOR_BUSINESS_AUTH_LOGOUT]: "/for-business/auth/logout",





    [AppRoutesLinks.MAIN]: "/",
    [AppRoutesLinks.ABOUT]: "/about",
    [AppRoutesLinks.SERVICES] : "/services",
    [AppRoutesLinks.CONTACT] : "/contact",



    [AppRoutesLinks.NOT_FOUND]: "/404",
    // last ones
    [AppRoutesLinks.NOT_FOUND_CATCH]: "*",
};



