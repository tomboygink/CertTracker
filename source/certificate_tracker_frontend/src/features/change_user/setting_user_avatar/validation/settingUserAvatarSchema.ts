import z from 'zod'

export const settingUserAvatarSchema = z.object({
	change: z.string(),
	avatar: z.string(),
	id: z.number()
})
