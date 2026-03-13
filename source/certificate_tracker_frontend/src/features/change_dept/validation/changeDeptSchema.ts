import z from 'zod'

export const changeDeptSchema = z.object({
	deptname: z.string().min(1, 'Поле не может быть пустым'),
	id: z.number()
})
