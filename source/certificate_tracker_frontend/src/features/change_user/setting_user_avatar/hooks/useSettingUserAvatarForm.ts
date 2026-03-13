import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { settingUserAvatarSchema } from '../validation/settingUserAvatarSchema'
import { SettingUserAvatarFormValues } from '../types/settingUserAvatarFormValues.types'
import { User } from '@/src/entities'

export const useSettingUserAvatarForm = (user: User) => {
	const form = useForm<SettingUserAvatarFormValues>({
		resolver: zodResolver(settingUserAvatarSchema),
		defaultValues: {
			change: 'ava_user',
			id: Number(user?.id)
		},
		mode: 'all',
		reValidateMode: 'onSubmit'
	})
	return form
}
