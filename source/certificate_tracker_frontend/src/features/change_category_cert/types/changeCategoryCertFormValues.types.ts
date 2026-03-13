import z from 'zod'
import { changeCategoryCertSchema } from '../validation/changeCategoryCertSchema'

export type ChangeCategoryCertFormValues = z.infer<
	typeof changeCategoryCertSchema
>
