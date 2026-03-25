import z from 'zod'

export const addDeptSchema = z.object({
	deptname: z
		.string()
		.min(1, 'Поле не может быть пустым')
		.max(250, 'Максимальная длина 250 символов')
})
