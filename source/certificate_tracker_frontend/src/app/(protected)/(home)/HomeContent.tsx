import { TitleAndDescrPages } from '@/src/shared'
import { HomeCertStatsList } from '@/src/widgets'
import moment from 'moment'
import { RequireAttensionCert } from './RequireAttensionCert'
import {
	getAllCategoryCert,
	getAllCert,
	getAllStatusCert
} from '@/src/entities'
import { StatisticForCategories } from './StatisticForCategories'

export async function HomeContent() {
	moment.locale('ru')

	const certData = await getAllCert()
	const statusData = await getAllStatusCert()
	const categoryCertData = await getAllCategoryCert()

	return (
		<>
			<div className="flex items-center justify-between w-full mb-[32px]">
				<TitleAndDescrPages
					title={'Панель управления'}
					descr={'Обзор состояния корпоративных сертификатов.'}
				/>
				<div className="px-[13px] py-[5px] pl-[37px] border-1 border-[rgba(242,242,242,1)] rounded-[6px] bg-[rgba(242,242,242,0.3)] bg-[url(/calendar.svg)] bg-[13px] bg-no-repeat">
					<p className="text-[14px] text-[#7f7f7f] leading-[20px]">
						Сегодня: {moment(new Date()).format('LL')}
					</p>
				</div>
			</div>
			<div className="w-full">
				<HomeCertStatsList />
			</div>
			<div className="flex gap-[24px]">
				<RequireAttensionCert
					certificates={certData?.data}
					status={statusData?.data}
				/>
				<StatisticForCategories
					categories={categoryCertData?.data}
					certificates={certData?.data}
				/>
			</div>
		</>
	)
}
