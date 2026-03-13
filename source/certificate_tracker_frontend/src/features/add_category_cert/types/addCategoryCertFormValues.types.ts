import z from 'zod'
import { addCategoryCertSchema } from '../validation/addCategoryCertSchema'

export type AddCategoryCertFormValues = z.infer<typeof addCategoryCertSchema>
