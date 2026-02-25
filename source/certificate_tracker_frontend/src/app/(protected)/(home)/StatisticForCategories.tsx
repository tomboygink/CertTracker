'use client'

import { CategoryCert, Cert } from '@/src/entities'
import { FC, useEffect, useMemo } from 'react'
import { StatisticForCategoriesItem } from './StatisticForCategoriesItem'

interface StatisticForCategoriesProps {
	categories: CategoryCert[]
	certificates: Cert[]
}

export const StatisticForCategories: FC<StatisticForCategoriesProps> = ({
	categories,
	certificates
}) => {
	const statisticConfig = useMemo(() => {
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
			const existing = result.has(item.id)
			const filteredCertificates = certificates?.filter(
				cert => cert.category_id === item.id
			)
			const currentPercent = Math.floor(
				(filteredCertificates?.length / total) * 100
			)
			if (!existing) {
				result.set(String(item.id), {
					percent: String(currentPercent),
					categoryName: item.categoryname,
					bgColor: colors[Number(item.id) - 1]
				})
			} else {
				result.set(String(item.id), {
					percent: String(currentPercent),
					categoryName: item.categoryname
				})
			}
		})

		return Array.from(result, ([key, value]) => ({ key, ...value }))
	}, [certificates, categories])

	// useEffect(() => {
	// 	console.log(statisticConfig)
	// }, [statisticConfig])

	useEffect(() => {
		console.log(certificates)
	}, [certificates])

	useEffect(() => {
		console.log(categories)
	}, [categories])

	return (
		<div className="p-[24px] w-full max-w-1/3 rounded-[12px] border-1 border-[#E0DFDF] shadow-md">
			<h2 className="text-[20px] text-[#202020] font-semibold leading-[28px] mb-[32px]">
				По категориям
			</h2>
			<ul className="flex flex-col gap-[16px]">
				{statisticConfig.map(item => (
					<li key={item.key}>
						<StatisticForCategoriesItem
							categoryName={item.categoryName ?? ''}
							percent={item.percent ?? ''}
							bgColor={item.bgColor ?? ''}
						/>
					</li>
				))}
			</ul>
			{/* <StatisticForCategoriesItem
				percent="45"
				categoryName="test"
				bgColor="#2B7FFF"
			/> */}
		</div>
	)
}
