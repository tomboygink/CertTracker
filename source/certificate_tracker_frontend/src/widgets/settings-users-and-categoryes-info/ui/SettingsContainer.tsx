'use client'

import { useState } from 'react'
import { SettingsTabsList } from './SettingsTabsList'
import { SettingsAllBlock } from './SettingsAllBlock'
import { SettingsUsersBlock } from './SettingsUsersBlock'
import { SettingsCategoryBlock } from './SettingsCategoryBlock'
import { useAllCategoryCertQuery } from '@/src/entities'
import { SettingDeptBlock } from './SettingDeptBlock'

export const SettingsContainer = () => {
	const [value, setValue] = useState<'all' | 'users' | 'categories' | 'dept'>(
		'all'
	)
	const { data: allCategory } = useAllCategoryCertQuery(
		{},
		{
			refetchOnFocus: true,
			refetchOnReconnect: true
		}
	)

	let content

	switch (value) {
		case 'all':
			content = <SettingsAllBlock />
			break

		case 'categories':
			content = (
				<SettingsCategoryBlock allCategory={allCategory?.data ?? null} />
			)
			break

		case 'users':
			content = <SettingsUsersBlock />
			break

		case 'dept':
			content = <SettingDeptBlock />
			break

		default:
			break
	}

	return (
		<>
			<div className="mb-[32px]">
				<SettingsTabsList setValue={setValue} value={value} />
			</div>
			{content}
		</>
	)
}
