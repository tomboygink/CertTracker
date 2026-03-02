import { apiPreparedBody, baseApi, bookKeys, ECommand } from '@/src/shared'

export const eventsApi = baseApi.injectEndpoints({
	endpoints: build => ({
		allEvents: build.query({
			query: args => apiPreparedBody(ECommand.allEvents, args),
			providesTags: bookKeys.events
		})
	})
})

export const { useAllEventsQuery } = eventsApi
