'use client'

import { User, useRegisterUserMutation } from '@/src/entities'
import { useAddUserForm } from './useAddUserForm'
import { useGetAllDataAddUser } from './useGetAllDataAddUser'
import { AddUserFormValues } from '../types/addUserFormValues.types'

export const useAddUser = () => {
	const { allAccessData, allWorkPosData, isLoading, allUsersData } =
		useGetAllDataAddUser()

	const form = useAddUserForm()
	const [mutate, result] = useRegisterUserMutation()

	const isSuchLogin = (login: string) => {
		const usersLogins = allUsersData?.map((user: User) => user.login)

		return usersLogins.includes(login)
	}

	const handleAddUserSubmit = (data: AddUserFormValues) => {
		mutate(data).then(response => console.log(response))
	}

	return {
		allAccessData,
		allWorkPosData,
		form,
		isLoading,
		isLoadingMutation: result.isLoading,
		isSuccessMutation: result.isSuccess,
		handleAddUserSubmit
	}
}
