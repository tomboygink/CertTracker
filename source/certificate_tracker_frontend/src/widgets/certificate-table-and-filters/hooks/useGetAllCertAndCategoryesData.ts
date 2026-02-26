'use client'

import { CategoryCert, Cert, useAllCategoryCertQuery, useAllCertQuery } from "@/src/entities"

export const useGetAllCertAndCategoryesData = (certificates: Cert[], categoryCert: CategoryCert[]) => {
    const { data: allCertificates } = useAllCertQuery(
            {},
            {
                refetchOnFocus: true,
                refetchOnReconnect: true,
                selectFromResult: result => ({
                    ...result,
                    data: certificates || result.data
                })
            }
        )
    
        const { data: allCategoryCert } = useAllCategoryCertQuery(
            {},
            {
                refetchOnFocus: true,
                refetchOnReconnect: true,
                selectFromResult: result => ({
                    ...result,
                    data: categoryCert || result.data
                })
            }
        )

        return { allCertificates, allCategoryCert }
}