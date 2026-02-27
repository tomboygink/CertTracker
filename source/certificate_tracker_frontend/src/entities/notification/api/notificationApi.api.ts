import { apiPreparedBody, baseApi, bookKeys, ECommand } from '@/src/shared'

export const notificationApi = baseApi.injectEndpoints({
	endpoints: build => ({
		allNotif: build.query({
			query: args => apiPreparedBody(ECommand.allNotif, args),
			providesTags: bookKeys.notification
		}),
		notifRead: build.mutation({
			query: args => apiPreparedBody(ECommand.notifRead, args),
			invalidatesTags: bookKeys.notification
		})
	})
})

export const { useAllNotifQuery, useNotifReadMutation } = notificationApi
