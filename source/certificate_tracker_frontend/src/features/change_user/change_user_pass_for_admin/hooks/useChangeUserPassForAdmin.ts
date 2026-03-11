import { useChangeUserMutation, User } from '@/src/entities'
import { useChangeUserPassForAdminForm } from './useChangeUserPassForAdminForm'
import { ChangeUserPassForAdminFormValues } from '../types/changeUserPassForAdminFormValues.types'

export const useChangeUserPassForAdmin = (user: User) => {
	const form = useChangeUserPassForAdminForm(user)

	const [mutate, result] = useChangeUserMutation()

	const handleChangeUserPassForAdminSubmit = (
		data: ChangeUserPassForAdminFormValues
	) => {
		mutate(data)
	}

	return {
		form,
		isLoading: result.isLoading,
		isSuccess: result.isSuccess,
		handleChangeUserPassForAdminSubmit
	}
}
