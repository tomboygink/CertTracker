import z from 'zod'
import { changeUserInfoUserSchema } from '../validation/changeUserInfoUserSchema'

export type ChangeUserInfoUserFormValues = z.infer<
	typeof changeUserInfoUserSchema
>
