'use client'

import {
	CategoryCert,
	Cert,
	useAllCategoryCertQuery,
	useAllCertQuery
} from '@/src/entities'
import { DateWidget, TitleAndDescrPages } from '@/src/shared'
import {
	DonutChart,
	getLastMonths,
	GraphicContainer,
	SplineChart,
	UpdateHistoryContainer
} from '@/src/widgets'
import { useEffect, useMemo } from 'react'
import { useGetFullSplineData } from './hooks/useGetFullSplineData'

export const AnaliticsContent = () => {
	const { data: allCert } = useAllCertQuery({})
	const { data: allCategory } = useAllCategoryCertQuery({})

	const fullSplineData = useGetFullSplineData(allCert?.data)

	const fullDonutData = useMemo(() => {
		if (!allCert || !allCategory) return []

		const activeCert = allCert?.data?.filter(
			(item: Cert) => item?.statuscert_id === '1'
		)

		return allCategory?.data?.map((item: CategoryCert) => {
			const count = activeCert?.filter((cert: Cert) => {
				return cert.category_id === item.id
			}).length
			return { deptName: item.categoryname, count }
		})
	}, [allCert?.data])

	useEffect(() => {
		console.log(fullDonutData)
	}, [fullDonutData])

	return (
		<>
			<div className="flex items-center justify-between w-full mb-[12px]">
				<TitleAndDescrPages
					title="Аналитика и отчеты"
					descr="Визуализация данных по типам, срокам и категориям."
				/>
				<DateWidget />
			</div>
			<div className="grid grid-cols-2 gap-[24px] w-full mb-[12px]">
				<GraphicContainer
					title="Динамика истечения сроков"
					descr="Количество сертификатов, истекающих в ближайшие 6 месяцев"
				>
					<SplineChart data={fullSplineData} />
				</GraphicContainer>
				<GraphicContainer
					title="Распределение по категориям"
					descr="Активные лицензии и сертификаты по отделам компании"
				>
					<DonutChart data={fullDonutData} />
				</GraphicContainer>
			</div>
			<div>
				<UpdateHistoryContainer />
			</div>
		</>
	)
}
