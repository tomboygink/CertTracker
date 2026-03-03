import { User } from '@/src/entities'
import { FormBtn } from '@/src/shared'
import { FC } from 'react'

interface SettingsUserItemProps {
	user: User
}

export const SettingsUserItem: FC<SettingsUserItemProps> = ({ user }) => {
	return (
		<div className="flex flex-col items-start gap-[12px] px-[8px] py-[16px] border-b-1 border-gray-200">
			<div className="flex items-center gap-[8px]">
				<div>
					<span className="text-[12px] text-gray-400">Имя Фамилия</span>
					<div className="flex items-center gap-[4px]">
						<p className="text-[16px] text-[#202020] font-medium">
							{user.firstname.at(0)?.toUpperCase() +
								user.firstname.slice(1).toLowerCase()}
						</p>
						<p className="text-[16px] text-[#202020] font-medium">
							{user.lastname.at(0)?.toUpperCase() +
								user.lastname.slice(1).toLowerCase()}
						</p>
					</div>
				</div>
				<div>
					<span className="text-[12px] text-gray-400">E-mail</span>
					<div className="flex items-center gap-[4px]">
						<p className="text-[16px] text-[#202020] font-medium">
							{user.firstname.at(0)?.toUpperCase() +
								user.firstname.slice(1).toLowerCase()}
						</p>
						<p className="text-[16px] text-[#202020] font-medium">
							{user.lastname.at(0)?.toUpperCase() +
								user.lastname.slice(1).toLowerCase()}
						</p>
					</div>
				</div>
				<div></div>
			</div>
			<FormBtn text="Редактировать" />
		</div>
	)
}
