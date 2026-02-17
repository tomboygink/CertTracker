import { z } from 'zod'

export const loginFormSchema = z.object({
	auth: z.string(),
	login: z.string().min(1, 'Поле не может быть пустым'),
	password: z.string().min(1, 'Поле не может быть пустым')
})
