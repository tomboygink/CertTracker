'use client'

import { useState } from 'react'
import { SettingsTabsList } from './SettingsTabsList'
import { SettingsAllBlock } from './SettingsAllBlock'
import { SettingsUsersBlock } from './SettingsUsersBlock'
import { SettingsCategoryBlock } from './SettingsCategoryBlock'
import {
	useAllCategoryCertQuery,
	useAllDeptQuery,
	useAllWorkPositionQuery
} from '@/src/entities'
import { SettingDeptBlock } from './SettingDeptBlock'
import { SettingWorkPosBlock } from './SettingWorkPosBlock'

export const SettingsContainer = () => {
	const [value, setValue] = useState<
		'all' | 'users' | 'categories' | 'dept' | 'workPos'
	>('all')
	const { data: allCategory } = useAllCategoryCertQuery(
		{},
		{
			refetchOnFocus: true,
			refetchOnReconnect: true
		}
	)
	const { data: allDept } = useAllDeptQuery(
		{},
		{
			refetchOnFocus: true,
			refetchOnReconnect: true
		}
	)
	const { data: workPos } = useAllWorkPositionQuery(
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
			content = <SettingDeptBlock allDept={allDept?.data} />
			break

		case 'workPos':
			content = <SettingWorkPosBlock workPos={workPos?.data} />
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
