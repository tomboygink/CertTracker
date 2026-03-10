import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { changeUserPassForAUserSchema } from '../validation/changeUserPassForAUserSchema'
import { ChangeUserPassForAUserFormValues } from '../types/changeUserPassForAUserFirmValues.types'
import { User } from '@/src/entities'

export const useChangePassUserForAUserForm = (user: User) => {
	const form = useForm<ChangeUserPassForAUserFormValues>({
		resolver: zodResolver(changeUserPassForAUserSchema),
		defaultValues: {
			change: 'pass_user',
			id: Number(user.id)
		}
	})
}
