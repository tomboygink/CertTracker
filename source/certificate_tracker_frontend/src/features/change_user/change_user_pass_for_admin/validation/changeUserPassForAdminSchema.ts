import z from 'zod'

export const changeUserPassForAdminSchema = z.object({
	change: z.string().max(250, 'Максимальная длина 250 символов'),
	password: z
		.string()
		.min(1, 'Поле не может быть пустым')
		.max(250, 'Максимальная длина 250 символов'),
	user_id: z.number()
})
