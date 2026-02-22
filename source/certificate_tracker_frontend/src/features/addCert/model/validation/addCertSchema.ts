import z from 'zod'

export const addCertSchema = z.object({
	user_id: z.number(),
	certname: z.string(),
	certnumber: z.string(),
	category_id: z.number(),
	issuedate: z.string(),
	certvalidityperiod: z.string(),
	docs: z.string()
})
