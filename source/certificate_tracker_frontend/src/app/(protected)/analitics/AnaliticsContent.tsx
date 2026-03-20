'use client'

import { useAllCategoryCertQuery, useAllCertQuery } from '@/src/entities'
import { DateWidget, TitleAndDescrPages } from '@/src/shared'
import {
	DonutChart,
	GraphicContainer,
	SplineChart,
	UpdateHistoryContainer
} from '@/src/widgets'
import { useGetFullSplineData } from './hooks/useGetFullSplineData'
import { useGetFullDonutData } from './hooks/useGetFullDonutData'

export const AnaliticsContent = () => {
	const { data: allCert } = useAllCertQuery({})
	const { data: allCategory } = useAllCategoryCertQuery({})

	const fullSplineData = useGetFullSplineData(allCert?.data)

	const fullDonutData = useGetFullDonutData(allCert?.data, allCategory?.data)

	return (
		<>
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between w-full mb-3">
				<TitleAndDescrPages
					title="Аналитика и отчеты"
					descr="Визуализация данных по типам, срокам и категориям."
				/>
				<DateWidget />
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full mb-3">
				<GraphicContainer
					title="Динамика истечения сроков"
					descr="Количество сертификатов, истекающих в ближайшие 6 месяцев"
				>
					{fullSplineData.map(item => item.count).reduce((a, b) => a + b, 0) ===
					0 ? (
						<div className="w-full h-full flex items-center justify-center">
							<p className="text-lg">Нет данных для отображения</p>
						</div>
					) : (
						<SplineChart data={fullSplineData} />
					)}
				</GraphicContainer>
				<GraphicContainer
					title="Распределение по категориям"
					descr="Активные лицензии и сертификаты по отделам компании"
				>
					{fullDonutData.map(item => item.count).reduce((a, b) => a + b, 0) ===
					0 ? (
						<div className="w-full h-full flex items-center justify-center">
							<p className="text-lg">Нет данных для отображения</p>
						</div>
					) : (
						<DonutChart data={fullDonutData} />
					)}
				</GraphicContainer>
			</div>
			<div>
				<UpdateHistoryContainer />
			</div>
		</>
	)
}
