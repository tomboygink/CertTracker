import z from 'zod'

export const changeUserInfoUserSchema = z.object({
	change: z.string().max(250, 'Максимальная длина 250 символов'),
	lastname: z
		.string()
		.min(1, 'Поле не может быть пустым')
		.max(250, 'Максимальная длина 250 символов'),
	firstname: z
		.string()
		.min(1, 'Поле не может быть пустым')
		.max(250, 'Максимальная длина 250 символов'),
	sendmail: z.boolean(),
	id: z.number()
})
