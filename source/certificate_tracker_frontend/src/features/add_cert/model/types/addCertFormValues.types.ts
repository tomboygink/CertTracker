import z from 'zod'
import { addCertSchema } from '../validation/addCertSchema'

export type AddCertFormValues = z.infer<typeof addCertSchema>
