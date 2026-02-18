'use client'

import {
	setUser,
	useLazyLoginUserWithTokenQuery,
	useLogoutUserMutation
} from '@/src/entities'
import { useAppDispatch, useAppSelector } from '@/src/shared'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'

interface RefreshAuthProviderProps {
	children: React.ReactNode
}

export const RefreshAuthProvider: FC<RefreshAuthProviderProps> = ({
	children
}) => {
	const user = useAppSelector(state => state.user.user)
	const [trigger, result] = useLazyLoginUserWithTokenQuery()
	const [logout] = useLogoutUserMutation()
	const router = useRouter()
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!user) {
			trigger({})
		}
	}, [user])

	useEffect(() => {
		if (result.isError) {
			logout({})
			router.replace('/login')
		}

		if (result.isSuccess) {
			dispatch(setUser(result?.data?.data?.[0]))
		}
	}, [result])

	return <>{children}</>
}
