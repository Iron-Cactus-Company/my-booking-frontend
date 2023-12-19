// import {authApi, AuthUserSchema} from "@/entities/Auth";
// import {clanApi} from "@/entities/Clan";
// import {galleryApi} from "@/entities/Gallery";


import {authApi} from "@/auth/entities/authApi";

export interface StateSchema {
    authUser: AuthUserSchema;
    [authApi.reducerPath]: ReturnType<typeof authApi.reducer>;
    // [clanApi.reducerPath]: ReturnType<typeof clanApi.reducer>;
    // [galleryApi.reducerPath]: ReturnType<typeof galleryApi.reducer>;


}

