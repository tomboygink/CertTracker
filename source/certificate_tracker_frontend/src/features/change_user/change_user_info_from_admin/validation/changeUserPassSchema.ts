import z from 'zod'

export const changeUserPassSchema = z.object({
	password: z.string().min(1, 'Поле не может быть пустым'),
	user_id: z.number(),
	change: z.string()
})
