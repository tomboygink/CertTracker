'use client'

import { FC } from 'react'

interface SettingsTabsItemProps {
	text: string
	isActive: boolean
	btnValue: 'all' | 'users' | 'categories'
	setValue: (str: 'all' | 'users' | 'categories') => void
}

export const SettingsTabsItem: FC<SettingsTabsItemProps> = ({
	text,
	isActive,
	setValue,
	btnValue
}) => {
	return (
		<button
			className="py-[3.5px] px-[24px] rounded-[6px] text-[14px] text-[#202020] font-medium leading-[20px]"
			style={{
				backgroundColor: isActive ? 'white' : 'transparent',
				boxShadow: isActive ? '2px 2px 5px 1px rgba(0,0,0,0.2)' : ''
			}}
			onClick={() => setValue(btnValue)}
		>
			{text}
		</button>
	)
}
