import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { changeUserInfoUserSchema } from '../validation/changeUserInfoUserSchema'
import { ChangeUserInfoUserFormValues } from '../types/changeUserInfoUserFormValues.types'
import { User } from '@/src/entities'

export const useChangeUserForUserForm = (user: User) => {
	const form = useForm<ChangeUserInfoUserFormValues>({
		resolver: zodResolver(changeUserInfoUserSchema),
		defaultValues: {
			id: Number(user.id),
			change: 'data_user',
			lastname: user.lastname ?? '',
			firstname: user.firstname ?? '',
			sendmail: user.sendmail ?? false
		},
		mode: 'all',
		reValidateMode: 'onSubmit'
	})
	return form
}
