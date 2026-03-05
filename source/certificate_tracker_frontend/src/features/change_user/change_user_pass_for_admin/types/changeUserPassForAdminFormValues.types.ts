import z from 'zod'
import { changeUserPassForAdminSchema } from '../validation/changeUserPassForAdminSchema'

export type ChangeUserPassForAdminFormValues = z.infer<
	typeof changeUserPassForAdminSchema
>
