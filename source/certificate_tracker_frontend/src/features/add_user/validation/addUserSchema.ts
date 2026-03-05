import z from 'zod'

export const addUserSchema = z.object({
	login: z.string().min(1, 'Поле не может быть пустым'),
	password: z.string().min(1, 'Поле не может быть пустым'),
	lastname: z.string().min(1, 'Поле не может быть пустым'),
	firstname: z.string().min(1, 'Поле не может быть пустым'),
	access_id: z.number(),
	email: z
		.email('Введите корректный электронный адрес')
		.min(1, 'Поле не может быть пустым'),
	sendmail: z.boolean(),
	workposition_id: z.string(),
	deleted: z.boolean()
})
