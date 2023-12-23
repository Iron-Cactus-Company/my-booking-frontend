// import {authApi, AuthUserSchema} from "@/entitity/Auth";
// import {clanApi} from "@/entitity/Clan";
// import {galleryApi} from "@/entitity/Gallery";


import {authApi} from "@/auth";
import {companyApi} from "@/company";

export interface StateSchema {
    authUser: AuthUserSchema;
    [authApi.reducerPath]: ReturnType<typeof authApi.reducer>;
    [companyApi.reducerPath]: ReturnType<typeof companyApi.reducer>;
}

