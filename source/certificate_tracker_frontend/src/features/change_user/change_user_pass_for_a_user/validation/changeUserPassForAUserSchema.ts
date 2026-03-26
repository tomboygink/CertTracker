import z from 'zod'

export const changeUserPassForAUserSchema = z.object({
	change: z.string().max(250, 'Максимальная длина 250 символов'),
	old_password: z.string().max(250, 'Максимальная длина 250 символов'),
	new_password: z
		.string()
		.min(1, 'Поле не может быть пустым')
		.max(250, 'Максимальная длина 250 символов'),
	id: z.number()
})
