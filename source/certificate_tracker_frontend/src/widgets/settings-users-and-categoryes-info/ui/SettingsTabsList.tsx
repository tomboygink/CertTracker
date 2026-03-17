'use client'

import { FC } from 'react'
import { SETTINGS_TABS_CONFIG } from '../config/SETTINGS_TABS_CONFIG.config'
import { SettingsTabsItem } from './SettingsTabsItem'
import { selectRoles, useAppSelector } from '@/src/shared'

interface SettingsTabsListProps {
	setValue: (str: 'all' | 'users' | 'categories' | 'dept' | 'workPos') => void
	value: 'all' | 'users' | 'categories' | 'dept' | 'workPos'
}

export const SettingsTabsList: FC<SettingsTabsListProps> = ({
	setValue,
	value
}) => {
	const roles = useAppSelector(selectRoles)

	return (
		<ul
			style={{ gap: roles.isAdmin ? '6px' : '' }}
			className="inline-flex items-center py-[4.5px] rounded-[8px] px-[4px] bg-gray-100"
		>
			{SETTINGS_TABS_CONFIG.map(item => (
				<li key={item.id}>
					<SettingsTabsItem
						text={item.text}
						isActive={item.value === value}
						setValue={setValue}
						btnValue={item.value}
						isVisible={
							item.id === '1' ||
							roles.isAdmin ||
							(item.id === '3' && roles.isManager)
						}
					/>
				</li>
			))}
		</ul>
	)
}
