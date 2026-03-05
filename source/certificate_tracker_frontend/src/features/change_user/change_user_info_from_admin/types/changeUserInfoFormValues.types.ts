import z from 'zod'
import { changeUserInfoSchema } from '../validation/changeUserInfoSchema'

export type ChangeUserInfoFormValues = z.infer<typeof changeUserInfoSchema>
