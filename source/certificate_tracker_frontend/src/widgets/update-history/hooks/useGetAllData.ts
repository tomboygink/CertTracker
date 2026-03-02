import { useAllEventsQuery, useAllUsersQuery } from '@/src/entities'

export const useGetAllData = () => {
	const {
		data: allEvents,
		isLoading: isEventsLoading,
		isSuccess: isEventsSuccess
	} = useAllEventsQuery({})
	const { data: allUsers, isLoading, isSuccess } = useAllUsersQuery({})

	return {
		allEvents,
		allUsers,
		isLoading: isEventsLoading || isLoading,
		isSuccess: isSuccess,
		isEventsSuccess
	}
}
