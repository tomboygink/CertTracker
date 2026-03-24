'use client'

import { useAllCategoryCertQuery, useAllCertQuery } from '@/src/entities'
import { FC, useMemo } from 'react'
import { StatisticForCategoriesItem } from './StatisticForCategoriesItem'
import { calculateCategoryStatistics } from './services/calculateCategoryStatistics'

interface StatisticForCategoriesProps {}

export const StatisticForCategories: FC<StatisticForCategoriesProps> = ({}) => {
	const { data: allCatogoryes } = useAllCategoryCertQuery(
		{},
		{
			refetchOnFocus: true,
			refetchOnReconnect: true,
			refetchOnMountOrArgChange: true,
			pollingInterval: 1000 * 60 * 60
		}
	)
	const { data: allCert } = useAllCertQuery(
		{},
		{
			refetchOnFocus: true,
			refetchOnReconnect: true,
			refetchOnMountOrArgChange: true,
			pollingInterval: 1000 * 60 * 60
		}
	)

	const statisticConfig = useMemo(() => {
		if (!allCert?.data || !allCatogoryes?.data) return null
		return calculateCategoryStatistics(allCert?.data, allCatogoryes?.data)
	}, [allCert?.data, allCatogoryes?.data])

	return (
		<div className="flex min-h-0 w-full min-w-0 flex-col rounded-[12px] border-1 border-[#E0DFDF] p-4 shadow-md sm:p-6 lg:flex-1">
			<h2 className="max-w-[250px] mb-2 shrink-0 text-md font-semibold leading-7 text-[#202020] sm:mb-2 sm:text-md sm:leading-[28px] md:mb-2 md:text-md lg:mb-6 lg:text-lg xl:text-lg xl:mb-6 2xl:text-lg 2xl:mb-6">
				По категориям
			</h2>
			<ul className="flex max-h-[min(420px,50vh)] min-h-0 flex-col gap-4 overflow-y-auto no-scrollbar sm:max-h-[min(480px,45vh)] lg:max-h-none lg:flex-1">
				{statisticConfig &&
					statisticConfig.map(item => (
						<li key={item.key}>
							<StatisticForCategoriesItem
								categoryName={item.categoryName ?? ''}
								percent={item.percent ?? ''}
								bgColor={item.bgColor ?? ''}
							/>
						</li>
					))}
			</ul>
		</div>
	)
}
