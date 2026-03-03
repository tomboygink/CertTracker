'use client'

import { useAllUsersQuery } from '@/src/entities'
import { useEffect } from 'react'

export const SettingsUsersBlock = () => {
	const { data: allUsers } = useAllUsersQuery({})

	useEffect(() => {
		console.log(allUsers?.data)
	}, [allUsers?.data])

	return <></>
}
