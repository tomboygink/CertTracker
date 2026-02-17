import {
	apiPreparedBody,
	baseApi,
	bookKeys,
	ECommand,
	TArgs
} from '@/src/shared'

export const userApi = baseApi.injectEndpoints({
	endpoints: build => ({
		loginUser: build.mutation({
			query: (args: { cmd: ECommand.auth; args: TArgs | TArgs[] }) => ({
				url: '/api',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					cmd: `${args.cmd}`,
					args: args.args
				})
			}),
			invalidatesTags: bookKeys.login
		}),
		loginUserWithToken: build.mutation({
			query: args => apiPreparedBody(ECommand.authToken, args),
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
