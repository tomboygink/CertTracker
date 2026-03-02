import { CategoryCert, Cert } from '@/src/entities'

export const generationCertificatesWithCategory = (
	allCertificates: Cert[],
	allCategoryCert: CategoryCert[]
) => {
	const resultMap = new Map<string, { cert?: Cert; category: CategoryCert }>()

	allCertificates?.forEach(item => {
		const filteredCategory = allCategoryCert?.filter(
			category => item?.category_id === category?.id
		)

		resultMap.set(item.id, { cert: item, category: filteredCategory?.[0] })
	})

	return Array.from(resultMap, ([key, value]) => ({ key, ...value }))
}
