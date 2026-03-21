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
			<header className="mb-6 flex w-full flex-col gap-4 sm:flex-col sm:items-start sm:justify-between md:flex-col md:items-start lg:items-center lg:flex-row lg:items-center 2xl:flex-row 2xl:items-center">
				<TitleAndDescrPages
					title={'Панель управления'}
					descr={'Обзор состояния корпоративных сертификатов.'}
				/>
				<DateWidget />
			</header>
			{!certData?.data || certData?.data?.length < 1 ? (
				<h2 className="text-[20px] font-medium">Нет сертификатов</h2>
			) : (
				<>
					<div className="w-full min-w-0">
						<HomeCertStatsList />
					</div>
					<div className="flex w-full min-w-0 flex-col gap-6 lg:flex-col lg:items-stretch xl:flex-col xl:items-stretch 2xl:flex-row 2xl:items-stretch">
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
