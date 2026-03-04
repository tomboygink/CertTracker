'use client'

import { Dept, User, WorkPosition } from '@/src/entities'
import { SettingsUserItem } from './SettingsUserItem'
import { useGetAllSettingsData } from '../hooks/useGetAllSettingsData'
import { useCreateFullInfo } from '../hooks/useCreateFullUserInfo'

export const SettingsUsersBlock = () => {
	const { isLoading, usersData, deptData, workPosData } =
		useGetAllSettingsData()

	const fullUsersInfo = useCreateFullInfo(usersData, deptData, workPosData)

	if (!usersData || isLoading) return null

	return (
		<>
			<div>
				<div className="w-5/10 flex items-center justify-between mb-[24px]">
					<h2 className="text-[20px] font-medium leading-[20px]">
						Информация о пользователях
					</h2>
					<button className="px-[16px] py-[8px] bg-[var(--bg-color)] rounded-[6px] font-medium text-[14px] text-white cursor-pointer hover:bg-[var(--bg-color-hover)] transition-all duration-300">
						+ Добавить пользователя
					</button>
				</div>
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
