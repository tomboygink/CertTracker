import z from 'zod'

export const addWorkPosSchema = z.object({
	workpositionname: z.string().min(1, 'Поле не может быть пустым'),
	dept_id: z.number()
})
