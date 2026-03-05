import z from 'zod'
import { addUserSchema } from '../validation/addUserSchema'

export type AddUserFormValues = z.infer<typeof addUserSchema>
