import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { NET } from './../../network';
import { IStream } from './../models/IStream';

export const streamApi = createApi({
    reducerPath: 'streamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: NET.BACK_URL
    }),
    endpoints: (builder) => ({
        get: builder.query<{data: IStream[]}, number>({
            query: (page) => ({
                url: '/streams',
                params: {
                    page: page
                }
            })
        })
    })
})