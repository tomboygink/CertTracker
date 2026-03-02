import { CategoryCert, Cert } from '@/src/entities'
import { colors } from '@/src/shared'

export const calculateCategoryStatistics = (
	certificates: Cert[],
	categories: CategoryCert[]
) => {
	const total = certificates?.length

	const result = new Map<
		string,
		{ percent?: string; categoryName?: string; bgColor?: string }
	>()

	categories?.forEach(item => {
		const filteredCertificates = certificates?.filter(
			cert => cert.category_id === item.id
		)
		const currentPercent = Math.round(
			(filteredCertificates?.length / total) * 100
		)
		result.set(String(item.id), {
			percent: String(currentPercent),
			categoryName: item.categoryname,
			bgColor: colors.color[Number(item.id) - 1]
		})
	})

	return Array.from(result, ([key, value]) => ({ key, ...value }))
}
