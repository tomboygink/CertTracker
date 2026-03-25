'use client'

import { Dept, User, WorkPosition } from '@/src/entities'
import { ChangeUserBtn } from '@/src/features'
import { FC } from 'react'

interface SettingsUserItemProps {
	allUsersInfo: { key: string; user: User; dept: Dept; workPos: WorkPosition }
}

export const SettingsUserItem: FC<SettingsUserItemProps> = ({
	allUsersInfo
}) => {
	return (
		<div className="flex flex-col items-start gap-[12px] px-[8px] py-[16px] border-b-1 border-gray-200">
			<div className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-[16px]">
				<div className="grid grid-cols-1 w-full items-start gap-[12px] min-w-0 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:items-start xl:grid-cols-4 2xl:grid-cols-4">
					<div className="flex flex-row min-w-0 w-full justify-between sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col">
						<span className="text-[12px] text-gray-400">Имя Фамилия</span>
						<div className="flex items-center gap-[4px] min-w-0 flex-wrap">
							<p className="text-sm text-right sm:text-left md:text-left sm:text-sm md:text-md lg:text-[16px] xl:text-[16px] 2xl:text-[16px] text-[#202020] font-medium break-all [overflow-wrap:anywhere]">
								{allUsersInfo.user.firstname.at(0)?.toUpperCase() +
									allUsersInfo.user.firstname.slice(1).toLowerCase()}
							</p>
							<p className="text-sm text-right sm:text-left md:text-left sm:text-sm md:text-md lg:text-[16px] xl:text-[16px] 2xl:text-[16px] text-[#202020] font-medium break-all [overflow-wrap:anywhere]">
								{allUsersInfo.user.lastname.at(0)?.toUpperCase() +
									allUsersInfo.user.lastname.slice(1).toLowerCase()}
							</p>
						</div>
					</div>
					<div className="flex flex-row justify-between min-w-0 w-full sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col">
						<span className="text-[12px] text-gray-400">E-mail</span>
						<div className="flex items-center gap-[4px] min-w-0">
							<p className="text-sm sm:text-sm md:text-md lg:text-[16px] xl:text-[16px] 2xl:text-[16px] text-[#202020] text-right font-medium break-all [overflow-wrap:anywhere]">
								{allUsersInfo.user.email}
							</p>
						</div>
					</div>
					<div className="flex flex-row justify-between min-w-0 w-full sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col">
						<span className="text-[12px] text-gray-400">Должность</span>
						<div className="flex items-center gap-[4px] min-w-0">
							<p className="text-sm text-right sm:text-left md:text-left sm:text-sm md:text-md lg:text-[16px] xl:text-[16px] 2xl:text-[16px] text-[#202020] font-medium break-all [overflow-wrap:anywhere] whitespace-normal">
								{allUsersInfo.workPos.workpositionname}
							</p>
						</div>
					</div>
					<div className="flex flex-row justify-between min-w-0 w-full sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col">
						<span className="text-[12px] text-gray-400">Отдел</span>
						<div className="flex items-center gap-[4px] min-w-0">
							<p className="text-sm sm:text-sm md:text-md lg:text-[16px] xl:text-[16px] 2xl:text-[16px] text-[#202020] text-right font-medium break-all [overflow-wrap:anywhere] whitespace-normal">
								{allUsersInfo.dept.deptname}
							</p>
						</div>
					</div>
				</div>
				<div className="flex-shrink-0 max-w-5/10">
					<ChangeUserBtn user={allUsersInfo.user} />
				</div>
			</div>
		</div>
	)
}
