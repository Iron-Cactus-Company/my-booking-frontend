import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {envHelper} from "@/shared/const/envHelper";
import {StateSchema} from "@/shared/config/reduxConfig";
const companyUrl = "company";

export const companyApi = createApi({
    reducerPath: 'companyApi',
    tagTypes: ['Company'],
    baseQuery: fetchBaseQuery({
        baseUrl: envHelper.apiLink,
        credentials: "include",
        prepareHeaders: (headers, { getState, endpoint }) => {
            const accessTokenInfo = (getState() as StateSchema).authUser.accessTokenInfo;
            const excludedEndpoints = ['getCompanies', 'getCompanyById', 'deleteCompany', 'updateCompany'];
            if (accessTokenInfo && !excludedEndpoints.includes(endpoint)) {
                headers.set('Authorization', `Bearer ${accessTokenInfo?.accessToken}`);
            }
        },
    }),
    endpoints: (builder) => ({

        getCompanies: builder.query<ICompany[], {page?: number, limit? : number}>({
            query: (options) => {
                return {
                    page: options.page,
                    limit: options.limit,
                    url: companyUrl,
                    method: 'GET',
                }
            },
            providesTags: ['Company'],
        }),

        getCompanyById: builder.query<ICompany, string>({
            query: (companyId) => `${companyUrl}/${companyId}`,
            providesTags: ['Company']
        }),

        createCompany: builder.mutation<ICompany, ICompany>({
            query: (company) => ({
                url: companyUrl,
                method: 'POST',
                body: company,
            }),
            invalidatesTags: ['Company'],
        }),

        deleteCompany: builder.mutation<void, string>({
            query: (companyId) => ({
                url: `${companyUrl}/${companyId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Company'],
        }),

        updateCompany: builder.mutation<void, ICompany>({
            query: (company) => ({
                url: companyUrl,
                method: 'PUT',
                body: company,
            }),
            invalidatesTags: ['Company'],
        }),

    }),
});

export const {
    util,
    useGetCompaniesQuery,
    useGetCompanyByIdQuery,
    useCreateCompanyMutation,
    useDeleteCompanyMutation,
    useUpdateCompanyMutation,
    endpoints: companyEndpoints
} = companyApi;
