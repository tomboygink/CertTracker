'use client'

import { Cert, useAllCertQuery } from '@/src/entities'
import { HOME_SERT_STATISTIC } from '../config/HOME_CERT_STATISTIC.config'
import { HomeCertStatsItem } from './HomeCertStatsItem'
import { useEffect, useMemo } from 'react'
import { HomeCertStatistic } from '../types/homeCertStatistic.types'

export const HomeCertStatsList = () => {
	const { data: allCert } = useAllCertQuery({})

	const fullHomeCertStatistic = useMemo(() => {
		const totalCounter: {
			total: number
			active: number
			expiring: number
			expired: number
		} = {
			total: Number(allCert?.data?.length),
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

	useEffect(() => {
		console.log(fullHomeCertStatistic)
	}, [fullHomeCertStatistic])

	return (
		<ul className="grid grid-cols-4 gap-[24px] mb-[32px]">
			{fullHomeCertStatistic.map(item => (
				<li
					key={item.key}
					className="px-[24px] py-[48px] rounded-[12px] border-1 border-[#E0DFDF] shadow-md"
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
