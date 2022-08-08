import {configureStore} from "@reduxjs/toolkit"

import {myJsonServerApi} from "./myJsonServerApi/myJsonServerApi"

export const store = configureStore({
    reducer: {
        [myJsonServerApi.reducerPath]: myJsonServerApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(myJsonServerApi.middleware)
})