declare type ICompanyRegisterDto =  {
    email: string,
    password: string,
    repeatPassword: string,
};

declare type ICompanyLoginDto = {
    username: string,
    password: string,
}

declare type ILoginResponse = {
    accessToken: string
}


declare type AccessTokenInfo = {
    accessToken: string,
    accessTokenExpiresAt: number
}

declare type AuthUserSchema = {
    accessTokenInfo?: AccessTokenInfo
}
