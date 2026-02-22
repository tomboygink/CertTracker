import { TitleAndDescrPages } from '@/src/shared'
import { HomeCertStatsList } from '@/src/widgets'
import moment from 'moment'

export const HomeContent = () => {
	moment.locale('ru')
	return (
		<>
			<div className="flex items-center justify-between w-full mb-[32px]">
				<TitleAndDescrPages
					title={'Панель управления'}
					descr={'Обзор состояния корпоративных сертификатов на сегодня.'}
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
		</>
	)
}
