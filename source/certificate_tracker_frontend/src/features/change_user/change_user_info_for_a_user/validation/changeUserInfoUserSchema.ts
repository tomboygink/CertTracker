import z from 'zod'

export const changeUserInfoUserSchema = z.object({
	change: z.string(),
	lastname: z.string().min(1, 'Поле не может быть пустым'),
	firstname: z.string().min(1, 'Поле не может быть пустым'),
	sendmail: z.boolean(),
	id: z.number()
})
