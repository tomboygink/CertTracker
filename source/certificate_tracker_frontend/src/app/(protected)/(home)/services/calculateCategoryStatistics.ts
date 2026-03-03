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


	const temp = categories.map(item => {
		const count = certificates.filter(
			cert => cert.category_id === item.id
		).length

		const raw = total ? (count / total) * 100 : 0

		return {
			item,
			percent: raw,
			floored: Math.floor(raw),
			fraction: raw % 1
		}
	})

	let sum = temp.reduce((acc, el) => acc + el.floored, 0)
	let remainder = 100 - sum

	const sortedByFraction = [...temp].sort(
		(a, b) => b.fraction - a.fraction
	)

	sortedByFraction.forEach(el => {
		if (remainder > 0) {
			el.floored++
			remainder--
		}
	})

	temp.forEach(el => {
		result.set(String(el.item.id), {
			percent: String(el.floored),
			categoryName: el.item.categoryname,
			bgColor: colors.color[Number(el.item.id) - 1]
		})
	})




	return Array.from(result, ([key, value]) => ({ key, ...value }))
}
