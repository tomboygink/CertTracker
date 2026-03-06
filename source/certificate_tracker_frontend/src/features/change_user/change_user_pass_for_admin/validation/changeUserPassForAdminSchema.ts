import z from 'zod'

export const changeUserPassForAdminSchema = z.object({
	change: z.string(),
	password: z.string().min(1, 'Поле не может быть пустым'),
	user_id: z.number()
})
