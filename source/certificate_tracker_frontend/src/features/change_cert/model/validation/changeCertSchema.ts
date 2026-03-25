import z from 'zod'

export const changeCertSchema = z.object({
	certname: z
		.string()
		.min(1, 'Поле не может быть пустым')
		.max(250, 'Максимальная длина 250 символов'),
	certnumber: z
		.string()
		.min(1, 'Поле не может быть пустым')
		.max(250, 'Максимальная длина 250 символов'),
	category_id: z.number().min(1, 'Поле не может быть пустым'),
	issuedate: z
		.string()
		.min(1, 'Поле не может быть пустым')
		.max(250, 'Максимальная длина 250 символов'),
	certvalidityperiod: z
		.string()
		.min(1, 'Поле не может быть пустым')
		.max(250, 'Максимальная длина 250 символов'),
	docs: z.string().min(1, 'Поле не может быть пустым'),
	id: z.number(),
	user_id: z.number()
})
