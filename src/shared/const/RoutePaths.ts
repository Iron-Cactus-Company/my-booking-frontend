export enum AppRoutesLinks {
    AUTH = "AUTH",
    AUTH_LOGIN = "AUTH_LOGIN",
    AUTH_REGISTER = "AUTH_REGISTER",
    AUTH_LOGIN_FPW = "AUTH_LOGIN_FPW",
    AUTH_LOGOUT = "AUTH_LOGOUT",
    AUTH_SESSION_EXP = "AUTH_SESSION_EXP",

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
    [AppRoutesLinks.AUTH_SESSION_EXP]: "/auth/sessionExpired",


    [AppRoutesLinks.MAIN]: "/",
    [AppRoutesLinks.ABOUT]: "/about",
    [AppRoutesLinks.SERVICES] : "/services",
    [AppRoutesLinks.CONTACT] : "/contact",


    [AppRoutesLinks.NOT_FOUND]: "/404",
    // last ones
    [AppRoutesLinks.NOT_FOUND_CATCH]: "*",
};



