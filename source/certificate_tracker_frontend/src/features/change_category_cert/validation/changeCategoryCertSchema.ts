import z from 'zod'

export const changeCategoryCertSchema = z.object({
	categoryname: z.string().min(1, 'Поле не может быть пустым'),
	id: z.number()
})
