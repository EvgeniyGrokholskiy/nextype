import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"

import {ICardData, ICategories} from "../../models/models"


export const myJsonServerApi = createApi({
    reducerPath: "myJsonServerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://my-json-server.typicode.com/glebov-g/frontend-fake-db",
    }),
    endpoints: build => ({
        getCategories: build.query <ICategories[], void>({
            query: () => ({
                url: "categories"
            })
        }),
        getCardsData: build.query<ICardData[], number>({
            query: (categoryId) => ({
                url: "items",
                params: {
                    categoryId: categoryId
                }
            })
        })
    })
})

export const {useGetCategoriesQuery, useGetCardsDataQuery} = myJsonServerApi