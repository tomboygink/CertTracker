import z from 'zod'

export const settingUserAvatarSchema = z.object({
	change: z.string().max(250, 'Максимальная длина 250 символов'),
	avatar: z.string(),
	id: z.number()
})
