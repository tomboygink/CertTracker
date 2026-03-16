import { CategoryCert, Cert } from '@/src/entities'
import { useMemo } from 'react'

export const useGetFullDonutData = (
	allCert: Cert[],
	allCategory: CategoryCert[]
) => {
	const fullDonutData = useMemo(() => {
		if (!allCert || !allCategory) return []

		const activeCert = allCert?.filter(
			(item: Cert) => item?.statuscert_id === '1'
		)

		return allCategory?.map((item: CategoryCert) => {
			const count = activeCert?.filter((cert: Cert) => {
				return cert.category_id === item.id
			}).length
			return { deptName: item.categoryname, count }
		})
	}, [allCert, allCategory])

	return fullDonutData
}
