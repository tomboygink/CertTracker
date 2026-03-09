import { Cert } from '@/src/entities'
import { useMemo } from 'react'

export const useFilteredCertBySearch = (
	searchValue: string,
	allCert: Cert[]
) => {
	const filteredCertBySearch = useMemo(() => {
		if (!searchValue || !allCert) return []

		const filteredCertWithoutArchive = allCert?.filter(
			item => item.statuscert_id !== '4'
		)

		const filteredCert = filteredCertWithoutArchive?.filter(
			item =>
				item.certname.toLowerCase().includes(searchValue.toLowerCase()) ||
				item.certnumber.toLowerCase().includes(searchValue?.toLowerCase())
		)

		return filteredCert
	}, [searchValue, allCert])
	return filteredCertBySearch
}
