import { CategoryCert, Cert } from '@/src/entities'
import moment from 'moment'
import { FC } from 'react'
import { ActionsWithCertificateBtn } from './ActionsWithCertificateBtn'

interface CertificateMobileCardProps {
	cert: Cert | null
	categoryCert: CategoryCert
}

export const CertificateMobileCard: FC<CertificateMobileCardProps> = ({
	cert,
	categoryCert
}) => {
	return (
		<div className="flex flex-col gap-[12px] p-[16px] border-1 border-[#E0DFDF] rounded-[12px] bg-[#fdfdfd] w-full shadow-sm">
			<div className="flex flex-row justify-between items-start gap-[8px] w-full">
				<span className="text-[12px] text-[#7f7f7f] shrink-0 mt-[2px]">Название</span>
				<p className="text-[14px] text-[#202020] font-medium break-words text-right min-w-0">{cert?.certname}</p>
			</div>
			
			<div className="flex flex-row justify-between items-start gap-[8px] w-full">
				<span className="text-[12px] text-[#7f7f7f] shrink-0 mt-[2px]">Номер</span>
				<p className="text-[14px] text-[#7f7f7f] font-medium text-right break-words min-w-0">{cert?.certnumber}</p>
			</div>

			<div className="flex flex-row justify-between items-center gap-[8px] w-full">
				<span className="text-[12px] text-[#7f7f7f] shrink-0">Категория</span>
				<div className="text-right">
					{categoryCert?.categoryname ? (
						<span className="py-[3px] px-[9px] bg-[rgba(241,228,251,0.5)] rounded-[12px] text-[12px] text-[#202020] leading-[16px]">
							{categoryCert?.categoryname}
						</span>
					) : (
						<span className="text-[#202020]">—</span>
					)}
				</div>
			</div>

			<div className="flex flex-row justify-between items-center gap-[8px] w-full">
				<span className="text-[12px] text-[#7f7f7f] shrink-0">Начало действия</span>
				<p className="text-[14px] text-[#202020] font-medium text-right">{moment(cert?.issuedate).format('DD.MM.YYYY')}</p>
			</div>

			<div className="flex flex-row justify-between items-center gap-[8px] w-full">
				<span className="text-[12px] text-[#7f7f7f] shrink-0">Окончание действия</span>
				<p className="text-[14px] text-[#202020] font-medium text-right">{moment(cert?.certvalidityperiod).format('DD.MM.YYYY')}</p>
			</div>

			<div className="flex flex-row justify-between items-center gap-[8px] w-full">
				<span className="text-[12px] text-[#7f7f7f] shrink-0">Статус</span>
				<div className="text-right">
					{cert?.statuscert_id === '2' ? (
						<span className="text-[12px] text-[#A65F00] font-medium bg-[#FEF9C2] py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-[#A65F00] bg-[url(/warning.svg)] bg-no-repeat bg-[11px]">
							Истекает
						</span>
					) : cert?.statuscert_id === '3' ? (
						<span className="text-[12px] text-[#C10007] font-medium bg-[#FFE2E2] py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-[#FFC9C9] bg-[url(/red-close.svg)] bg-no-repeat bg-[11px]">
							Просрочен
						</span>
					) : cert?.statuscert_id === '1' ? (
						<span className="text-[12px] text-green-600 font-medium bg-green-100 py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-green-400 bg-[url(/active.svg)] bg-no-repeat bg-[11px]">
							Активен
						</span>
					) : (
						<span className="text-[12px] text-gray-600 font-medium bg-gray-100 py-[3px] pr-[12px] pl-[32px] rounded-[12px] border-1 border-gray-400 bg-[url(/archive.svg)] bg-no-repeat bg-[11px]">
							Архив
						</span>
					)}
				</div>
			</div>

			<div className="flex flex-row justify-end items-center border-t-1 border-gray-100 pt-[12px] mt-[4px]">
				<ActionsWithCertificateBtn cert={cert} />
			</div>
		</div>
	)
}
