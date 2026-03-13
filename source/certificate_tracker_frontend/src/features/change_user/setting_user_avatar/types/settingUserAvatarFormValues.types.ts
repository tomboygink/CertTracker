import z from 'zod'
import { settingUserAvatarSchema } from '../validation/settingUserAvatarSchema'

export type SettingUserAvatarFormValues = z.infer<
	typeof settingUserAvatarSchema
>
