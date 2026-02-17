import { apiPreparedBody, baseApi, bookKeys, ECommand } from '@/src/shared'

export const userApi = baseApi.injectEndpoints({
	endpoints: build => ({
		loginUser: build.mutation({
			query: args => apiPreparedBody(ECommand.auth, args),
			invalidatesTags: bookKeys.login
		}),
		loginUserWithToken: build.mutation({
			query: args => apiPreparedBody(ECommand.getUser, args),
			invalidatesTags: bookKeys.login
		}),
		registerUser: build.mutation({
			query: args => apiPreparedBody(ECommand.addUser, args),
			invalidatesTags: bookKeys.register
		})
	})
})

export const {
	useLoginUserMutation,
	useLoginUserWithTokenMutation,
	useRegisterUserMutation
} = userApi
