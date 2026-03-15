import z from 'zod'
import { changeWorkPosSchema } from '../validation/changeWorkPosSchema'

export type ChangeWorkPosFormValues = z.infer<typeof changeWorkPosSchema>
