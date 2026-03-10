'use client'

import { Dept, User, WorkPosition } from '@/src/entities'
import { useMemo } from 'react'

export const useCreateFullInfo = (
	usersData: User[],
	deptData: Dept[],
	workPosData: WorkPosition[],
	user: User
) => {
	const fullUsersInfo = useMemo(() => {
		const result = new Map<
			string,
			{ user: User; workPos: WorkPosition; dept: Dept }
		>()

		if (!usersData || !workPosData || !deptData || !user) return []

		const filteredUsersExceptCurrent = usersData?.filter(
			item => item.id !== user.id
		)

		filteredUsersExceptCurrent?.forEach((item: User) => {
			const filteredWorkPosition: WorkPosition | undefined = workPosData.find(
				(workPos: WorkPosition) => workPos.id === item.workposition_id
			)

			if (!filteredWorkPosition) return

			const filteredDeptUser: Dept | undefined = deptData?.find(
				(dept: Dept) => dept.id === filteredWorkPosition.dept_id
			)

			if (!filteredDeptUser) return

			result.set(item.id, {
				user: item,
				workPos: filteredWorkPosition,
				dept: filteredDeptUser
			})
		})

		return Array.from(result, ([key, value]) => ({ key, ...value }))
	}, [deptData, workPosData, usersData])
	return fullUsersInfo
}
