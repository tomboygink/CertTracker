'use client'

import {
	useAllAccessQuery,
	useAllUsersQuery,
	useAllWorkPositionQuery
} from '@/src/entities'

export const useGetAllDataAddUser = () => {
	const { data: allAccess, isLoading } = useAllAccessQuery(
		{},
		{
			refetchOnFocus: true,
			refetchOnReconnect: true
		}
	)
	const { data: allWorkPos, isLoading: isWorkPosLoading } =
		useAllWorkPositionQuery(
			{},
			{
				refetchOnFocus: true,
				refetchOnReconnect: true
			}
		)
	const { data: allUsers, isLoading: isUsersLoading } = useAllUsersQuery({})

	return {
		allAccessData: allAccess?.data,
		allWorkPosData: allWorkPos?.data,
		isLoading: isLoading || isWorkPosLoading || isUsersLoading,
		allUsersData: allUsers?.data
	}
}
