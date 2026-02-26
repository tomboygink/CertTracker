import { CategoryCert, Cert } from "@/src/entities";

export const calculateCategoryStatistics = (certificates: Cert[], categories: CategoryCert[]) => {
    const colors = [
			'#2B7FFF',
			'#AD46FF',
			'#00C950',
			'#FF6900',
			'#FFF085',
			'#ff15d8',
			'#5334ff',
			'#C10007',
			'#15ffc4'
		]

		const total = certificates?.length

		const result = new Map<
			string,
			{ percent?: string; categoryName?: string; bgColor?: string }
		>()

		categories?.forEach(item => {
			const filteredCertificates = certificates?.filter(
				cert => cert.category_id === item.id
			)
			const currentPercent = Math.floor(
				(filteredCertificates?.length / total) * 100
			)
			result.set(String(item.id), {
				percent: String(currentPercent),
				categoryName: item.categoryname,
				bgColor: colors[Number(item.id) - 1]
			})
		})

		return Array.from(result, ([key, value]) => ({ key, ...value }))
}