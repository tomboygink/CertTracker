import { DateWidget, TitleAndDescrPages } from '@/src/shared'
import { GraphicContainer, UpdateHistoryContainer } from '@/src/widgets'

export const AnaliticsContent = () => {
	return (
		<>
			<div className="flex items-center justify-between w-full mb-[32px]">
				<TitleAndDescrPages
					title="Аналитика и отчеты"
					descr="Визуализация данных по типам, срокам и категориям."
				/>
				<DateWidget />
			</div>
			<div className="grid grid-cols-2 gap-[24px] w-full mb-[32px]">
				<GraphicContainer
					title="Динамика истечения сроков"
					descr="Количество сертификатов, истекающих в ближайшие 6 месяцев"
				>
					<div></div>
				</GraphicContainer>
				<GraphicContainer
					title="Распределение по категориям"
					descr="Активные лицензии и сертификаты по отделам компании"
				>
					<div></div>
				</GraphicContainer>
			</div>
			<div>
				<UpdateHistoryContainer />
			</div>
		</>
	)
}
