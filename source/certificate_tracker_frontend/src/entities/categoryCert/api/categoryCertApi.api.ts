import { apiPreparedBody, baseApi, bookKeys, ECommand } from '@/src/shared'

export const categoryCertApi = baseApi.injectEndpoints({
	endpoints: build => ({
		addCategoryCert: build.mutation({
			query: args => apiPreparedBody(ECommand.addCategoryCert, args),
			invalidatesTags: bookKeys.categoryCert
		}),
		changeCategoryCert: build.mutation({
			query: args => apiPreparedBody(ECommand.changeCategoryCert, args),
			invalidatesTags: bookKeys.categoryCert
		}),
		allCategoryCert: build.query({
			query: args => apiPreparedBody(ECommand.allCategoryCert, args),
			providesTags: bookKeys.categoryCert
		})
	})
})

export const {
	useAddCategoryCertMutation,
	useAllCategoryCertQuery,
	useChangeCategoryCertMutation
} = categoryCertApi
