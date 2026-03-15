import z from 'zod'
import { addDeptSchema } from '../validation/addDeptSchema'

export type AddDeptFormValues = z.infer<typeof addDeptSchema>
