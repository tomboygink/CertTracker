import z from 'zod'
import { changeDeptSchema } from '../validation/changeDeptSchema'

export type ChangeDeptFormValues = z.infer<typeof changeDeptSchema>
