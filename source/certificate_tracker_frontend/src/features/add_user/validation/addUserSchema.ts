import { User } from '@/src/entities'
import z from 'zod'

export const addUserSchema = (allUsersData: User[] = []) =>
	z.object({
		login: z
			.string()
			.trim()
			.min(1, 'Поле не может быть пустым')
			.max(250, 'Максимальная длина 250 символов')
			.superRefine((val, ctx) => {
				const normalizedLogin = val.toLowerCase()
				const exists = allUsersData.some(
					user => (user.login ?? '').toLowerCase() === normalizedLogin
				)

				if (exists) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						message: 'Такой логин уже существует'
					})
				}
			}),
		password: z
			.string()
			.min(1, 'Поле не может быть пустым')
			.max(250, 'Максимальная длина 250 символов'),
		lastname: z
			.string()
			.min(1, 'Поле не может быть пустым')
			.max(250, 'Максимальная длина 250 символов'),
		firstname: z
			.string()
			.min(1, 'Поле не может быть пустым')
			.max(250, 'Максимальная длина 250 символов'),
		access_id: z.number(),
		email: z
			.email('Введите корректный электронный адрес')
			.min(1, 'Поле не может быть пустым')
			.max(250, 'Максимальная длина 250 символов'),
		sendmail: z.boolean(),
		workposition_id: z.string(),
		deleted: z.boolean()
	})
