import { Dept, User, WorkPosition } from '@/src/entities'
import { useMemo } from 'react'

export const useCreateFullInfo = (
	usersData: User[],
	deptData: Dept[],
	workPosData: WorkPosition[]
) => {
	const fullUsersInfo = useMemo(() => {
		const result = new Map<
			string,
			{ user: User; workPos: WorkPosition; dept: Dept }
		>()

		if (!usersData || !workPosData || !deptData) return []

		usersData?.forEach((item: User) => {
			const filteredWorkPosition: WorkPosition = workPosData.find(
				(workPos: WorkPosition) => workPos.id === item.workposition_id
			)

			const filteredDeptUser: Dept = deptData?.find(
				(dept: Dept) => dept.id === filteredWorkPosition.dept_id
			)

			result.set(item.id, {
				user: item,
				workPos: filteredWorkPosition,
				dept: filteredDeptUser
			})
		})

		return Array.from(result, ([key, value]) => ({ key, ...value }))
	}, [deptData, workPosData, usersData])
}
