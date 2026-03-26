import z from 'zod'

export const changeUserPassSchema = z.object({
	password: z
		.string()
		.min(1, 'Поле не может быть пустым')
		.max(250, 'Максимальная длина 250 символов'),
	user_id: z.number(),
	change: z.string().max(250, 'Максимальная длина 250 символов')
})
