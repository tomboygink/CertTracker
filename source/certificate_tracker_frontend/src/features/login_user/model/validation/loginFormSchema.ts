import { z } from 'zod'

export const loginFormSchema = z.object({
	login: z.string().min(1, 'Поле не может быть пустым'),
	password: z.string().min(1, 'Поле не может быть пустым')
})
