import z from 'zod'

export const changeWorkPosSchema = z.object({
	workpositionname: z.string().min(1, 'Поле не может быть пустым'),
	dept_id: z.number(),
	id: z.number()
})
