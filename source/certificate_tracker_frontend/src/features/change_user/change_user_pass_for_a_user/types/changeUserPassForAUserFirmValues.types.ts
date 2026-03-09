import z from 'zod'
import { changeUserPassForAUserSchema } from '../validation/changeUserPassForAUserSchema'

export type ChangeUserPassForAUserFormValues = z.infer<
	typeof changeUserPassForAUserSchema
>
