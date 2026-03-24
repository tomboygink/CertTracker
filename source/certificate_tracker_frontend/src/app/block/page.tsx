'use client'

import { clearUser, useLogoutUserMutation } from '@/src/entities'
import { useAppDispatch } from '@/src/shared'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function BlockPage() {
	const [logout] = useLogoutUserMutation()
	const dispatch = useAppDispatch()

	useEffect(() => {
		const logoutUser = async () => {
			dispatch(clearUser())
			await logout({})
			redirect('/login')
		}

		logoutUser()
	}, [dispatch, logout])

	return <></>
}
