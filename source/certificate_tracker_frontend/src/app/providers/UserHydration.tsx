'use client'

import { setUser, User } from '@/src/entities'
import { useAppDispatch } from '@/src/shared'
import { FC, useEffect } from 'react'

interface UserHydrationProps {
	user: User
	children: React.ReactNode
}

export const UserHydration: FC<UserHydrationProps> = ({ user, children }) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setUser(user))
	}, [user])

	return <>{children}</>
}
