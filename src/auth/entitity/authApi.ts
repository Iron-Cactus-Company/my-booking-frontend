"use client"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {envHelper} from "@/shared/const/envHelper";
import {StateSchema} from "@/shared/config/reduxConfig";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: envHelper.apiLink,
            credentials: "include",
            prepareHeaders :(headers,{getState, endpoint})=>{
                const accessTokenInfo = (getState() as StateSchema).authUser.accessTokenInfo;
                const excludedEndpoints = ['login', 'refresh', 'register'];
                if(accessTokenInfo && !excludedEndpoints.includes(endpoint)) {
                    headers.set('Authorization', `Bearer ${accessTokenInfo?.accessToken}`);
                }
            },

        }),
    endpoints: (builder) => ({

        login: builder.mutation<ILoginResponse, ICompanyLoginDto>({
            query: (loginDTO) => ({
                url: 'auth/login',
                method: 'POST',
                body: loginDTO,
            }),
        }),

        register: builder.mutation<Object, ICompanyRegisterDto>({
            query: (registerDto) => ({
                url: '/businessprofile',
                method: 'POST',
                body: registerDto,
            }),
        }),

        logout: builder.mutation<void, void>({
            query: () => ({
                url: 'auth/logout',
                method: 'POST',
            }),

        }),

    }),
})

export const {
    util,
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    endpoints: authEndpoints
} = authApi;
