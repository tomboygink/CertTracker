import z from 'zod'

export const addCertSchema = z.object({
	user_id: z.number(),
	certname: z.string().min(1, 'Поле обязательно для заполнения'),
	certnumber: z.string().min(1, 'Поле обязательно для заполнения'),
	category_id: z.number().min(1, 'Выберите категорию'),
	issuedate: z.string().min(1, 'Выберите дату создания'),
	certvalidityperiod: z.string().min(1, 'Выберите дату окончания срока действия'),
	docs: z.string().min(1, 'Прикрепите документ')
})
