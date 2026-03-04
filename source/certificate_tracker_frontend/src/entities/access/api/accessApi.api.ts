import { apiPreparedBody, baseApi, bookKeys, ECommand } from '@/src/shared'

export const accessApi = baseApi.injectEndpoints({
	endpoints: build => ({
		allAccess: build.query({
			query: args => apiPreparedBody(ECommand.allAccess, args),
			providesTags: bookKeys.access
		})
	})
})

export const { useAllAccessQuery } = accessApi
