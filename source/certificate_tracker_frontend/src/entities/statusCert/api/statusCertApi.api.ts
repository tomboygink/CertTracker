import { apiPreparedBody, baseApi, bookKeys, ECommand } from "@/src/shared";

export const statusCertApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        allStatusCert: build.query({
            query: (args) => apiPreparedBody(ECommand.allStatusCert, args),
            providesTags: bookKeys.status,
        })
    })
})

export const { useAllStatusCertQuery } = statusCertApi