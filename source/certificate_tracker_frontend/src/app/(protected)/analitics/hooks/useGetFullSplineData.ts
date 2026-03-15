'use client'

import { Cert } from '@/src/entities'
import { getLastMonths } from '@/src/widgets'
import { useMemo } from 'react'

export const useGetFullSplineData = (allCert: Cert[]) => {
	const monthsData = getLastMonths(6)

	const fullSplineData = useMemo(() => {
		if (!monthsData || !allCert) return []

		return monthsData.map(item => {
			const count = allCert.filter((cert: Cert) => {
				const certDate = new Date(cert.certvalidityperiod)
				return (
					certDate.getMonth() === item.date.getMonth() &&
					certDate.getFullYear() === item.date.getFullYear()
				)
			}).length

			return { label: item.label, count }
		})
	}, [monthsData, allCert])
	return fullSplineData
}
