'use client'

import { CategoryCert, Cert } from '@/src/entities'
import { FC, useEffect, useMemo } from 'react'
import { StatisticForCategoriesItem } from './StatisticForCategoriesItem'
import { calculateCategoryStatistics } from './services/calculateCategoryStatistics'

interface StatisticForCategoriesProps {
	categories: CategoryCert[]
	certificates: Cert[]
}

export const StatisticForCategories: FC<StatisticForCategoriesProps> = ({
	categories,
	certificates
}) => {
	const statisticConfig = useMemo(() => {
		return calculateCategoryStatistics(certificates, categories)
	}, [certificates, categories])

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
