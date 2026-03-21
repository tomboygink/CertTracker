'use client'

import { Cert, useAllCertQuery } from '@/src/entities'
import { HOME_SERT_STATISTIC } from '../config/HOME_CERT_STATISTIC.config'
import { HomeCertStatsItem } from './HomeCertStatsItem'
import { useEffect, useMemo } from 'react'
import { HomeCertStatistic } from '../types/homeCertStatistic.types'

export const HomeCertStatsList = () => {
	const { data: allCert } = useAllCertQuery({})

	const fullHomeCertStatistic: HomeCertStatistic[] = useMemo(() => {
		const totalNotArchive = allCert?.data?.filter(
			(item: Cert) => item?.statuscert_id !== '4'
		)

		const totalCounter: {
			total: number
			active: number
			expiring: number
			expired: number
		} = {
			total: Number(totalNotArchive?.length),
			active: 0,
			expiring: 0,
			expired: 0
		}

		allCert?.data?.forEach((item: Cert) => {
			switch (item.statuscert_id) {
				case '1':
					totalCounter.active++
					break
				case '2':
					totalCounter.expiring++
					break
				case '3':
					totalCounter.expired++
					break
				default:
					break
			}
		})

		return HOME_SERT_STATISTIC.map((item: HomeCertStatistic) => ({
			...item,
			value: String(totalCounter[item.key])
		}))
	}, [allCert?.data])

	return (
		<ul className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
			{fullHomeCertStatistic.map(item => (
				<li
					key={item.key}
					className="rounded-[12px] border-1 border-[#E0DFDF] px-4 py-4 shadow-md sm:px-4 sm:py-6 xl:px-[24px] xl:py-[48px]"
				>
					<HomeCertStatsItem
						descr={item.descr}
						title={item.title}
						icon={item.icon}
						bgColor={item.bgColor}
						value={item.value}
					/>
				</li>
			))}
		</ul>
	)
}
