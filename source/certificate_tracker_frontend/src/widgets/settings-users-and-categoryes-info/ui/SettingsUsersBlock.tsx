'use client'

import { Dept, User, WorkPosition } from '@/src/entities'
import { SettingsUserItem } from './SettingsUserItem'
import { useGetAllSettingsData } from '../hooks/useGetAllSettingsData'
import { useCreateFullInfo } from '../hooks/useCreateFullUserInfo'
import { AddUserBtn } from '@/src/features'
import { useAppSelector } from '@/src/shared'
import { useEffect } from 'react'

export const SettingsUsersBlock = () => {
	const { isLoading, usersData, deptData, workPosData } =
		useGetAllSettingsData()
	const user = useAppSelector(state => state.user.user)

	const fullUsersInfo = useCreateFullInfo(
		usersData,
		deptData,
		workPosData,
		user
	)

	if (!usersData || isLoading) return null

	return (
		<>
			<div className="h-10">
				<div className="w-5/10 flex items-center justify-between mb-[24px]">
					<h2 className="text-[20px] font-medium leading-[20px]">
						Информация о пользователях
					</h2>
					<AddUserBtn />
				</div>
				{fullUsersInfo.length > 0 ? (
					<div className="w-1/2 h-[calc(100vh-302px)] p-[24px] mb-[16px] bg-white rounded-[12px] border-1 border-[#E0DFDF] shadow-md">
						<ul className="h-full overflow-y-scroll no-scrollbar">
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
					</div>
				) : (
					<p className="w-5/10 p-3 bg-gray-100 rounded-md">
						Нет доступных пользователей
					</p>
				)}
			</div>
		</>
	)
}
