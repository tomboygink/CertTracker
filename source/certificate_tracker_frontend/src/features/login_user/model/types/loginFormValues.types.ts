import z from 'zod'
import { loginFormSchema } from '../validation/loginFormSchema'

export type LoginFormValues = z.infer<typeof loginFormSchema>
