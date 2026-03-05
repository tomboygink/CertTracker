import { useAppSelector } from '@/src/shared'
import { useChangeUserForUserForm } from './useChangeUserForUserForm'
import { useChangeUserMutation, User } from '@/src/entities'
import { ChangeUserInfoUserFormValues } from '../types/changeUserInfoUserFormValues.types'

export const useChangeUserForUser = (user: User) => {
	const form = useChangeUserForUserForm(user)
	const [mutate, result] = useChangeUserMutation()

	const handleChangeUserInfoForUserSubmit = (
		data: ChangeUserInfoUserFormValues
	) => {
		mutate(data).then(response => console.log(response))
	}

	return {
		form,
		handleChangeUserInfoForUserSubmit,
		isLoading: result.isLoading,
		isSuccess: result.isSuccess
	}
}
