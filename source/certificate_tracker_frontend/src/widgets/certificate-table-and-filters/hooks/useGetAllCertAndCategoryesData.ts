'use client'

import {
	CategoryCert,
	Cert,
	useAllCategoryCertQuery,
	useAllCertQuery
} from '@/src/entities'

export const useGetAllCertAndCategoryesData = () => {
	const { data: allCertificates } = useAllCertQuery(
		{},
		{
			refetchOnFocus: true,
			refetchOnReconnect: true
		}
	)

	const { data: allCategoryCert } = useAllCategoryCertQuery(
		{},
		{
			refetchOnFocus: true,
			refetchOnReconnect: true
		}
	)

	return { allCertificates, allCategoryCert }
}
