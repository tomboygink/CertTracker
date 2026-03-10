import { useChangeUserForUserForm } from './useChangeUserForUserForm'
import {
	partiallyUpdateUser,
	setUser,
	useChangeUserMutation,
	User
} from '@/src/entities'
import { ChangeUserInfoUserFormValues } from '../types/changeUserInfoUserFormValues.types'
import { useAppDispatch } from '@/src/shared'

export const useChangeUserForUser = (user: User) => {
	const dispatch = useAppDispatch()
	const form = useChangeUserForUserForm(user)
	const [mutate, result] = useChangeUserMutation()

	const handleChangeUserInfoForUserSubmit = (
		data: ChangeUserInfoUserFormValues
	) => {
		mutate(data)
		dispatch(
			partiallyUpdateUser({
				firstname: data.firstname,
				lastname: data.lastname
			})
		)
	}

	return {
		form,
		handleChangeUserInfoForUserSubmit,
		isLoading: result.isLoading,
		isSuccess: result.isSuccess
	}
}
