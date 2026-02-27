import z from 'zod'
import { changeCertSchema } from '../validation/changeCertSchema'

export type ChangeCertFormValues = z.infer<typeof changeCertSchema>
