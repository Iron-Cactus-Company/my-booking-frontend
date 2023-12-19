export enum AppRoutesLinks {

    AUTH = "auth",
    AUTH_LOGIN = "auth_login",
    AUTH_REGISTER = "auth_register",
    AUTH_LOGIN_FPW = "auth_login_fpw",
    AUTH_LOGOUT = "auth_logout",
    AUTH_SESSION_EXP = "auth_session_exp",

    MAIN = "MAIN",
    ABOUT = "ABOUT",

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


    [AppRoutesLinks.NOT_FOUND]: "/404",
    // last one
    [AppRoutesLinks.NOT_FOUND_CATCH]: "*",
};


