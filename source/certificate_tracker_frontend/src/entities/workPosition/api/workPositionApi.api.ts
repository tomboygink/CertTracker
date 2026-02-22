import { apiPreparedBody, baseApi, bookKeys, ECommand } from '@/src/shared'

export const workPositionApi = baseApi.injectEndpoints({
	endpoints: build => ({
		addWorkPosition: build.mutation({
			query: args => apiPreparedBody(ECommand.addWorkPos, args),
			invalidatesTags: bookKeys.workPos
		}),
		changeWorkPosition: build.mutation({
			query: args => apiPreparedBody(ECommand.changeWorkPos, args),
			invalidatesTags: bookKeys.workPos
		}),
		allWorkPosition: build.query({
			query: args => apiPreparedBody(ECommand.allWorkPos, args),
			providesTags: bookKeys.workPos
		})
	})
})

export const {
	useAddWorkPositionMutation,
	useAllWorkPositionQuery,
	useChangeWorkPositionMutation
} = workPositionApi
