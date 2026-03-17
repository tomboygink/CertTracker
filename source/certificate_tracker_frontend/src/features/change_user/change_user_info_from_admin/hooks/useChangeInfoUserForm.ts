'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { changeUserInfoSchema } from '../validation/changeUserInfoSchema'
import { User } from '@/src/entities'

export const useChangeInfoUserForm = (user: User) => {
	const form = useForm({
		resolver: zodResolver(changeUserInfoSchema),
		defaultValues: {
			change: 'data_admin',
			lastname: user.lastname ?? '',
			firstname: user.firstname ?? '',
			access_id: user.access_id,
			email: user.email ?? '',
			sendmail: user.sendmail,
			workposition_id: user.workposition_id,
			deleted: user.deleted,
			user_id: Number(user.id)
		},
		mode: 'all',
		reValidateMode: 'onSubmit'
	})

	return form
}
