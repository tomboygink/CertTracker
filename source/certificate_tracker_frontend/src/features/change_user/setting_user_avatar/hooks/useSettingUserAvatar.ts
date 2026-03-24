'use client'

import {
	partiallyUpdateUser,
	useChangeUserMutation,
	User
} from '@/src/entities'
import { useSettingUserAvatarForm } from './useSettingUserAvatarForm'
import { SettingUserAvatarFormValues } from '../types/settingUserAvatarFormValues.types'
import { useState } from 'react'
import { useAppDispatch } from '@/src/shared'

export const useSettingUserAvatar = (user: User, base64: string | null) => {
	const [message, setMessage] = useState<{
		errorMessage: string
		successMessage: string
	}>({
		errorMessage: '',
		successMessage: ''
	})
	const [mutate, result] = useChangeUserMutation()
	const form = useSettingUserAvatarForm(user)

	const dispatch = useAppDispatch()

	const handleChangeUserAvatarSubmit = (data: SettingUserAvatarFormValues) => {
		mutate(data)
			.unwrap()
			.then(response => {
				if (response.err) {
					setMessage(prev => ({ ...prev, errorMessage: 'Произошла ошибка' }))
					throw new Error(response.err)
				}
				if (base64) {
					dispatch(
						partiallyUpdateUser({
							avatar: `${String(base64)}`
						})
					)
					setMessage(prev => ({
						...prev,
						successMessage: 'Аватар успешно изменен'
					}))
				} else {
					dispatch(
						partiallyUpdateUser({
							avatar: ''
						})
					)
					setMessage(prev => ({
						...prev,
						successMessage: 'Аватар сброшен'
					}))
				}
			})
			.catch(error => {
				throw new Error(error)
			})
	}

	return {
		form,
		handleChangeUserAvatarSubmit,
		isLoading: result.isLoading,
		successMessage: message.successMessage,
		errorMessage: message.errorMessage,
		setMessage
	}
}
