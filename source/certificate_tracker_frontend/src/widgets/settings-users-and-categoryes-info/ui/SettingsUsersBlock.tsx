'use client'

import { useAllUsersQuery, User } from '@/src/entities'
import { FormBtn } from '@/src/shared'
import { useEffect } from 'react'
import { SettingsUserItem } from './SettingsUserItem'

export const SettingsUsersBlock = () => {
	const { data: allUsers } = useAllUsersQuery({})

	useEffect(() => {
		console.log(allUsers?.data)
	}, [allUsers?.data])

	if (!allUsers?.data) return null

	return (
		<>
			<div>
				<h2 className="mb-[24px] text-[20px] font-medium leading-[20px]">
					Информация о пользователях
				</h2>
				<div className="w-1/2 p-[24px] mb-[16px] bg-white rounded-[12px] border-1 border-[#E0DFDF] shadow-md">
					{allUsers.data && (
						<ul>
							{allUsers.data.map((item: User) => (
								<li key={item.id}>
									<SettingsUserItem user={item} />
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	)
}
