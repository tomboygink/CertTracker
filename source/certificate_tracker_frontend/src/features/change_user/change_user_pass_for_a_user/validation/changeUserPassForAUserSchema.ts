import z from 'zod'

export const changeUserPassForAUserSchema = z.object({
	change: z.string(),
	old_password: z.string(),
	new_password: z.string().min(1, 'Поле не может быть пустым'),
	id: z.number()
})
