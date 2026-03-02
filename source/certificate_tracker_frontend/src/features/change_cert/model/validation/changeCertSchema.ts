import z from 'zod'

export const changeCertSchema = z.object({
	certname: z.string().min(1, 'Поле не может быть пустым'),
	certnumber: z.string().min(1, 'Поле не может быть пустым'),
	category_id: z.number().min(1, 'Поле не может быть пустым'),
	issuedate: z.string().min(1, 'Поле не может быть пустым'),
	certvalidityperiod: z.string().min(1, 'Поле не может быть пустым'),
	docs: z.string().min(1, 'Поле не может быть пустым'),
	id: z.number(),
	user_id: z.number()
})
