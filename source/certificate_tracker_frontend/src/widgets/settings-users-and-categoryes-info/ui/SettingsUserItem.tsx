import { FormBtn } from '@/src/shared'
import { FC } from 'react'

interface SettingsUserItemProps {
	label: string
	value: string
}

export const SettingsUserItem: FC<SettingsUserItemProps> = ({
	label,
	value
}) => {
	return (
		<div className="flex justify-between gap-[4px] px-[8px] py-[16px] border-b-1 border-gray-200">
			<div>
				<span className="text-[12px] text-gray-400">{label}</span>
				<p className="text-[16px] text-[#202020] font-medium">
					{value.at(0)?.toUpperCase() + value.slice(1).toLowerCase()}
				</p>
			</div>
			<FormBtn text="Редактировать" />
		</div>
	)
}
