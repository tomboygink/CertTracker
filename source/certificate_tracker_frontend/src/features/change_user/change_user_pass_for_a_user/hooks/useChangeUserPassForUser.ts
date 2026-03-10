'use client'

import { useChangeUserMutation, User } from '@/src/entities'
import { useChangePassUserForAUserForm } from './useChangePassUserForAUserForm'
import { ChangeUserPassForAUserFormValues } from '../types/changeUserPassForAUserFirmValues.types'
import { useState } from 'react'

export const useChangeUserPassForUser = (user: User) => {
	const form = useChangePassUserForAUserForm(user)

	const [error, setError] = useState<string | null>(null)
	const [successMess, setSuccessMess] = useState<string | null>(null)
	const [mutate, result] = useChangeUserMutation()

	const handleChangeUserPassSubmit = (
		data: ChangeUserPassForAUserFormValues
	) => {
		mutate(data)
			.unwrap()
			.then(response => {
				if (response.err) {
					setError(response.err)
					throw new Error(response.err)
				}
				setSuccessMess('Пароль успешно изменен')
			})
			.catch(error => {
				throw new Error(error)
			})
	}

	return {
		form,
		isLoading: result.isLoading,
		isSuccess: result.isSuccess,
		handleChangeUserPassSubmit,
		error,
		successMess
	}
}
