import z from 'zod'

export const addCertSchema = z.object({
	user_id: z.number(),
	certname: z
		.string()
		.min(1, 'Поле обязательно для заполнения')
		.max(250, 'Максимальная длина 250 символов'),
	certnumber: z
		.string()
		.min(1, 'Поле обязательно для заполнения')
		.max(250, 'Максимальная длина 250 символов'),
	category_id: z.number().min(1, 'Выберите категорию'),
	issuedate: z
		.string()
		.min(1, 'Выберите дату создания')
		.max(250, 'Максимальная длина 250 символов'),
	certvalidityperiod: z
		.string()
		.min(1, 'Выберите дату окончания срока действия')
		.max(250, 'Максимальная длина 250 символов'),
	docs: z.string().min(1, 'Прикрепите документ')
})
