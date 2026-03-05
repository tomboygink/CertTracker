'use client'

import { useRegisterUserMutation } from '@/src/entities'
import { useAddUserForm } from './useAddUserForm'
import { useGetAllDataAddUser } from './useGetAllDataAddUser'
import { AddUserFormValues } from '../types/addUserFormValues.types'

export const useAddUser = () => {
	const { allAccessData, allWorkPosData, isLoading } = useGetAllDataAddUser()

	const form = useAddUserForm()
	const [mutate, result] = useRegisterUserMutation()

	const handleAddUserSubmit = (data: AddUserFormValues) => {
		mutate(data)
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
