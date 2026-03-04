'use client'

import {
	Dept,
	useAllDeptQuery,
	useAllUsersQuery,
	useAllWorkPositionQuery,
	User,
	WorkPosition
} from '@/src/entities'
import { FormBtn } from '@/src/shared'
import { useEffect, useMemo } from 'react'
import { SettingsUserItem } from './SettingsUserItem'
import { useGetAllSettingsData } from '../hooks/useGetAllSettingsData'

export const SettingsUsersBlock = () => {
	const { isLoading, usersData, deptData, workPosData } =
		useGetAllSettingsData()

	const fullUsersInfo = useMemo(() => {
		const result = new Map<
			string,
			{ user: User; workPos: WorkPosition; dept: Dept }
		>()

		if (!usersData || !workPosData || !deptData) return []

		usersData?.forEach((item: User) => {
			const filteredWorkPosition: WorkPosition = workPosData?.find(
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

	useEffect(() => {
		console.log(fullUsersInfo)
	}, [fullUsersInfo])

	if (!usersData || isLoading) return null

	return (
		<>
			<div>
				<h2 className="mb-[24px] text-[20px] font-medium leading-[20px]">
					Информация о пользователях
				</h2>
				<div className="w-1/2 p-[24px] mb-[16px] bg-white rounded-[12px] border-1 border-[#E0DFDF] shadow-md">
					{fullUsersInfo && (
						<ul>
							{fullUsersInfo.map(
								(item: {
									key: string
									user: User
									dept: Dept
									workPos: WorkPosition
								}) => (
									<li key={item.key}>
										<SettingsUserItem allUsersInfo={item} />
									</li>
								)
							)}
						</ul>
					)}
				</div>
			</div>
		</>
	)
}
