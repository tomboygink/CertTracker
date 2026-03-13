import { FC } from 'react'
import { SETTINGS_TABS_CONFIG } from '../config/SETTINGS_TABS_CONFIG.config'
import { SettingsTabsItem } from './SettingsTabsItem'

interface SettingsTabsListProps {
	setValue: (str: 'all' | 'users' | 'categories' | 'dept' | 'workPos') => void
	value: 'all' | 'users' | 'categories' | 'dept' | 'workPos'
}

export const SettingsTabsList: FC<SettingsTabsListProps> = ({
	setValue,
	value
}) => {
	return (
		<ul className="inline-flex items-center gap-[6px] py-[4.5px] rounded-[8px] px-[4px] bg-gray-100">
			{SETTINGS_TABS_CONFIG.map(item => (
				<li key={item.id}>
					<SettingsTabsItem
						text={item.text}
						isActive={item.value === value}
						setValue={setValue}
						btnValue={item.value}
					/>
				</li>
			))}
		</ul>
	)
}
