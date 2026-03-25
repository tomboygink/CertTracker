'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { addUserSchema } from '../validation/addUserSchema'
import { AddUserFormValues } from '../types/addUserFormValues.types'
import { useMemo } from 'react'
import { User } from '@/src/entities'

export const useAddUserForm = (allUsersData: User[] = []) => {
	const schema = useMemo(() => addUserSchema(allUsersData), [allUsersData])

	return useForm<AddUserFormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			access_id: 3,
			deleted: false,
			sendmail: false
		},
		mode: 'all',
		reValidateMode: 'onSubmit'
	})
}
