import z from 'zod'

export const changeUserInfoSchema = z.object({
	change: z.string(),
	lastname: z.string().min(1, 'Поле не может быть пустым'),
	firstname: z.string().min(1, 'Поле не может быть пустым'),
	access_id: z.coerce.number().min(1, 'Поле не может быть пустым'),
	email: z
		.email('Некорректный электронный адрес')
		.min(1, 'Поле не может быть пустым'),
	sendmail: z.coerce.boolean(),
	workposition_id: z.coerce.string().min(1, 'Поле не может быть пустым'),
	deleted: z.boolean(),
	user_id: z.coerce.number()
})
