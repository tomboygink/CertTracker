import z from 'zod'

export const settingUserAvatarSchema = z.object({
	change: z.string(),
	avatar: z.string().min(1, 'Поле не может быть пустым'),
	id: z.number()
})
