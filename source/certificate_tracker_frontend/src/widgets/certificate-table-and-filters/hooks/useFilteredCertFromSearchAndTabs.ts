'use client'

import { CategoryCert, Cert } from '@/src/entities'
import { useMemo } from 'react'
import { generationCertificatesWithCategory } from '../services/generationCertificatesWithCategory'

export const useFilteredCertFromSearchAndTabs = (
	allCertificates: Cert[],
	allCategoryCert: CategoryCert[],
	searchValue: string,
	status: string | null,
	setStatus: (status: string | null) => void
) => {
	const filteredCertWithCategory = useMemo(() => {
		const certWithCategory = generationCertificatesWithCategory(
			allCertificates,
			allCategoryCert
		)

		if (searchValue && searchValue.length > 0) {
			setStatus(null)
			const filterNoArchive = certWithCategory.filter(
				item => item.cert?.statuscert_id !== '4'
			)
			return filterNoArchive.filter(
				item =>
					item.cert?.certname
						.toLowerCase()
						.includes(searchValue.toLowerCase()) ||
					item.cert?.certnumber
						.toLowerCase()
						.includes(searchValue.toLowerCase())
			)
		}

		if (status === null) {
			return certWithCategory.filter(item => item.cert?.statuscert_id !== '4')
		} else if (status === '1') {
			return certWithCategory.filter(item => item.cert?.statuscert_id === '1')
		} else if (status === '2') {
			return certWithCategory.filter(item => item.cert?.statuscert_id === '2')
		} else if (status === '3') {
			return certWithCategory.filter(item => item.cert?.statuscert_id === '3')
		} else if (status === '4') {
			return certWithCategory.filter(item => item.cert?.statuscert_id === '4')
		}
	}, [allCertificates, allCategoryCert, status, searchValue])
	return filteredCertWithCategory
}
