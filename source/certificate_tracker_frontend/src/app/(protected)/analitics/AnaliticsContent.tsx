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
		<div className="flex w-full min-w-0 flex-col gap-3 sm:gap-4 lg:h-[calc(100dvh-60px-32px)] lg:min-h-0 lg:overflow-hidden xl:h-[calc(100dvh-81px-32px)]">
			<div className="flex w-full items-start shrink-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<TitleAndDescrPages
					title="Аналитика и отчеты"
					descr="Визуализация данных по типам, срокам и категориям."
				/>
				<DateWidget />
			</div>
			<div className="grid w-full shrink-0 grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
				<GraphicContainer
					title="Динамика истечения сроков"
					descr="Количество сертификатов, истекающих в ближайшие 6 месяцев"
				>
					{fullSplineData.map(item => item.count).reduce((a, b) => a + b, 0) ===
					0 ? (
						<div className="flex h-full w-full items-center justify-center">
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
						<div className="flex h-full w-full items-center justify-center">
							<p className="text-lg">Нет данных для отображения</p>
						</div>
					) : (
						<DonutChart data={fullDonutData} />
					)}
				</GraphicContainer>
			</div>
			<div className="flex w-full min-w-0 flex-col overflow-hidden max-lg:h-[clamp(14rem,48dvh,26rem)] lg:min-h-0 lg:flex-1">
				<UpdateHistoryContainer />
			</div>
		</div>
	)
}
