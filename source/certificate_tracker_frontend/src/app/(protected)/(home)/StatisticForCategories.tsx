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
		return calculateCategoryStatistics(allCert?.data, allCatogoryes?.data)
	}, [allCert?.data, allCatogoryes?.data])

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
		</div>
	)
}
