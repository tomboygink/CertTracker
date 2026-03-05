'use client'

import { useAllAccessQuery, useAllWorkPositionQuery } from '@/src/entities'

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

	return {
		allAccessData: allAccess?.data,
		allWorkPosData: allWorkPos?.data,
		isLoading: isLoading || isWorkPosLoading
	}
}
