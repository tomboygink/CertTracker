import moment from 'moment'

export const DateWidget = () => {
	moment.locale('ru')

	return (
		<div className="px-[13px] py-[5px] pl-[37px] border-1 border-[rgba(242,242,242,1)] rounded-[6px] bg-[rgba(242,242,242,0.3)] bg-[url(/calendar.svg)] bg-[13px] bg-no-repeat sm:flex-start sm:justify-start md:flex-start md:justify-start lg:flex-start lg:justify-start xl:flex-end xl:justify-end 2xl:flex-end 2xl:justify-end">
			<p className="text-[14px] text-[#7f7f7f] leading-[20px]">
				Сегодня: {moment(new Date()).format('LL')}
			</p>
		</div>
	)
}
