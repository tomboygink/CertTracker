import z from 'zod'
import { changeUserPassSchema } from '../validation/changeUserPassSchema'

export type ChangeUserPassFormValues = z.infer<typeof changeUserPassSchema>
