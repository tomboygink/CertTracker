import { DateWidget, TitleAndDescrPages } from '@/src/shared'
import { HomeCertStatsList } from '@/src/widgets'
import { RequireAttensionCert } from './RequireAttensionCert'
import { getAllCert, getAllStatusCert } from '@/src/entities'
import { StatisticForCategories } from './StatisticForCategories'

export async function HomeContent() {
	const certData = await getAllCert()
	const statusData = await getAllStatusCert()

	return (
		<>
			<div className="flex items-center justify-between w-full mb-[32px]">
				<TitleAndDescrPages
					title={'Панель управления'}
					descr={'Обзор состояния корпоративных сертификатов.'}
				/>
				<DateWidget />
			</div>
			{!certData?.data || certData?.data?.length < 1 ? (
				<h2 className="text-[20px] font-medium">Нет сертификатов</h2>
			) : (
				<>
					<div className="w-full">
						<HomeCertStatsList />
					</div>
					<div className="flex gap-[24px]">
						<RequireAttensionCert
							certificates={certData?.data}
							status={statusData?.data}
						/>
						<StatisticForCategories />
					</div>
				</>
			)}
		</>
	)
}
