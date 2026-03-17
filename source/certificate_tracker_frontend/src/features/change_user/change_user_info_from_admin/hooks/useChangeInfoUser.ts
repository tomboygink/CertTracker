'use client'

import { useAppSelector } from '@/src/shared'
import { useChangeInfoUserForm } from './useChangeInfoUserForm'
import { useChangeUserMutation, User } from '@/src/entities'
import { ChangeUserInfoFormValues } from '../types/changeUserInfoFormValues.types'

export const useChangeInfoUser = (user: User) => {
	const form = useChangeInfoUserForm(user)
	const [mutate, result] = useChangeUserMutation()

	const handleChangeUserInfo = (data: ChangeUserInfoFormValues) => {
		console.log(data)
		mutate(data).then(response => console.log(response))
	}

	return {
		form,
		handleChangeUserInfo,
		isLoading: result.isLoading,
		isSuccess: result.isSuccess
	}
}
