import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { changeUserPassForAdminSchema } from '../validation/changeUserPassForAdminSchema'
import { ChangeUserPassForAdminFormValues } from '../types/changeUserPassForAdminFormValues.types'
import { User } from '@/src/entities'

export const useChangeUserPassForAdminForm = (user: User) => {
	const form = useForm<ChangeUserPassForAdminFormValues>({
		resolver: zodResolver(changeUserPassForAdminSchema),
		defaultValues: {
			change: 'pass_admin',
			user_id: Number(user.id)
		},
		mode: 'all',
		reValidateMode: 'onSubmit'
	})
	return form
}
