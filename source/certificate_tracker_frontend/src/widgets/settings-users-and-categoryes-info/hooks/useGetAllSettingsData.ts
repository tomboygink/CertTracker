'use client'

import {
	useAllDeptQuery,
	useAllUsersQuery,
	useAllWorkPositionQuery
} from '@/src/entities'

export const useGetAllSettingsData = () => {
	const { data: allUsers, isLoading: isUsersLoading } = useAllUsersQuery({})
	const { data: allDept, isLoading: isDeptLoading } = useAllDeptQuery({})
	const { data: allWork, isLoading: isWorkLoading } = useAllWorkPositionQuery(
		{}
	)

	return {
		isLoading: isUsersLoading || isDeptLoading || isWorkLoading,
		usersData: allUsers?.data,
		deptData: allDept?.data,
		workPosData: allWork?.data
	}
}
