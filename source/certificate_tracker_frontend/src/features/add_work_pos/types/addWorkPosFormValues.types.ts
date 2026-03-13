import z from 'zod'
import { addWorkPosSchema } from '../validation/addWorkPosSchema'

export type AddWorkPosFormValues = z.infer<typeof addWorkPosSchema>
