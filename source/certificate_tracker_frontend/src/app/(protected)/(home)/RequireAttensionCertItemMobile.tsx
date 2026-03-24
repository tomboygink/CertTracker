import { Cert } from '@/src/entities'
import moment from 'moment'
import { FC, useMemo } from 'react'

interface RequireAttensionCertItemMobileProps {
	certificate: Cert
}

export const RequireAttensionCertItemMobile: FC<
	RequireAttensionCertItemMobileProps
> = ({ certificate }) => {
	return (
		<div className="flex flex-col gap-2 py-[16px] border-b-1 border-gray-200">
			<div className="flex items-center justify-between w-full">
				<span className="text-[12px] text-[#7f7f7f] font-medium leading-4">
					Название
				</span>
				<p className="text-[12px] text-[#202020] font-medium leading-4">
					{certificate.certname}
				</p>
			</div>
			<div className="flex items-center justify-between w-full">
				<span className="text-[12px] text-[#7f7f7f] font-medium leading-4">
					Начало действия
				</span>
				<p className="text-[12px] text-[#202020] font-medium leading-4">
					{moment(certificate.issuedate).format('DD.MM.YYYY')}
				</p>
			</div>
			<div className="flex items-center justify-between w-full">
				<span className="text-[12px] text-[#7f7f7f] font-medium leading-4">
					Конец действия
				</span>
				<p className="text-[12px] text-[#202020] font-medium leading-4">
					{moment(certificate.certvalidityperiod).format('DD.MM.YYYY')}
				</p>
			</div>
			<div className="flex items-center justify-between w-full">
				<span className="text-[12px] text-[#7f7f7f] font-medium leading-4">
					Статус
				</span>
				<p className="text-[12px] font-medium leading-4">
					{certificate.statuscert_id === '2' ? (
						<span className="text-[9px] text-[#A65F00] font-medium bg-[#FEF9C2] py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-[#A65F00] bg-[url(/warning.svg)] bg-no-repeat bg-[11px]">
							Истекает
						</span>
					) : certificate.statuscert_id === '3' ? (
						<span className="text-[9px] text-[#C10007] font-medium bg-[#FFE2E2] py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-[#FFC9C9] bg-[url(/red-close.svg)] bg-no-repeat bg-[11px]">
							Просрочен
						</span>
					) : (
						<span className="text-[9px] text-green-600 font-medium bg-green-100 py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-green-400 bg-[url(/active.svg)] bg-no-repeat bg-[11px]">
							Активен
						</span>
					)}
				</p>
			</div>
		</div>
	)
}
