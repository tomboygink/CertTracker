'use client'

import { useEffect, useState } from 'react'
import { SettingsTabsList } from './SettingsTabsList'
import { SettingsAllBlock } from './SettingsAllBlock'
import { SettingsUsersBlock } from './SettingsUsersBlock'

export const SettingsContainer = () => {
	const [value, setValue] = useState<'all' | 'users' | 'categories'>('all')

	return (
		<>
			<div className="mb-[32px]">
				<SettingsTabsList setValue={setValue} value={value} />
			</div>
			{value === 'all' ? (
				<SettingsAllBlock />
			) : value === 'categories' ? (
				<div>Категории</div>
			) : (
				<SettingsUsersBlock />
			)}
		</>
	)
}
