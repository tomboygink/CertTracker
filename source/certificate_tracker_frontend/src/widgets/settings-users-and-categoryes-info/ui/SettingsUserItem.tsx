'use client'

import { Dept, User, WorkPosition } from '@/src/entities'
import { ChangeUserBtn } from '@/src/features'
import { FormBtn } from '@/src/shared'
import { FC } from 'react'

interface SettingsUserItemProps {
	allUsersInfo: { key: string; user: User; dept: Dept; workPos: WorkPosition }
}

export const SettingsUserItem: FC<SettingsUserItemProps> = ({
	allUsersInfo
}) => {
	return (
		<div className="flex flex-col items-start gap-[12px] px-[8px] py-[16px] border-b-1 border-gray-200">
			<div className="w-full flex items-end justify-between">
				<div className="flex items-center gap-[24px]">
					<div>
						<span className="text-[12px] text-gray-400">Имя Фамилия</span>
						<div className="flex items-center gap-[4px]">
							<p className="text-[16px] text-[#202020] font-medium">
								{allUsersInfo.user.firstname.at(0)?.toUpperCase() +
									allUsersInfo.user.firstname.slice(1).toLowerCase()}
							</p>
							<p className="text-[16px] text-[#202020] font-medium">
								{allUsersInfo.user.lastname.at(0)?.toUpperCase() +
									allUsersInfo.user.lastname.slice(1).toLowerCase()}
							</p>
						</div>
					</div>
					<div>
						<span className="text-[12px] text-gray-400">E-mail</span>
						<div className="flex items-center gap-[4px]">
							<p className="text-[16px] text-[#202020] font-medium">
								{allUsersInfo.user.email}
							</p>
						</div>
					</div>
					<div>
						<span className="text-[12px] text-gray-400">Должность</span>
						<div className="flex items-center gap-[4px]">
							<p className="text-[16px] text-[#202020] font-medium">
								{allUsersInfo.workPos.workpositionname}
							</p>
						</div>
					</div>
					<div>
						<span className="text-[12px] text-gray-400">Отдел</span>
						<div className="flex items-center gap-[4px]">
							<p className="text-[16px] text-[#202020] font-medium">
								{allUsersInfo.dept.deptname}
							</p>
						</div>
					</div>
				</div>
				<div>
					<ChangeUserBtn user={allUsersInfo.user} />
				</div>
			</div>
		</div>
	)
}
