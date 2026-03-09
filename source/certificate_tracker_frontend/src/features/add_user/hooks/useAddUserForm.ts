'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { addUserSchema } from '../validation/addUserSchema'
import { AddUserFormValues } from '../types/addUserFormValues.types'

export const useAddUserForm = () => {
	const form = useForm<AddUserFormValues>({
		resolver: zodResolver(addUserSchema),
		defaultValues: {
			access_id: 3,
			deleted: false,
			sendmail: false
		},
		mode: 'all',
		reValidateMode: 'onSubmit'
	})
	return form
}
