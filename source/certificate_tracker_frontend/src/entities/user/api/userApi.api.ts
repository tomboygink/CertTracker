import { apiPreparedBody, baseApi, bookKeys, ECommand } from '@/src/shared'

export const userApi = baseApi.injectEndpoints({
	endpoints: build => ({
		loginUser: build.mutation({
			query: args => apiPreparedBody(ECommand.auth, args),
			invalidatesTags: bookKeys.login
		}),
		loginUserWithToken: build.query({
			query: args => apiPreparedBody(ECommand.getUser, args),
			providesTags: bookKeys.user
		}),
		registerUser: build.mutation({
			query: args => apiPreparedBody(ECommand.addUser, args),
			invalidatesTags: bookKeys.register
		}),
		logoutUser: build.mutation({
			query: args => apiPreparedBody(ECommand.logout, args),
			invalidatesTags: bookKeys.logout
		})
	})
})

export const {
	useLoginUserMutation,
	useLazyLoginUserWithTokenQuery,
	useLoginUserWithTokenQuery,
	useRegisterUserMutation,
	useLogoutUserMutation
} = userApi
