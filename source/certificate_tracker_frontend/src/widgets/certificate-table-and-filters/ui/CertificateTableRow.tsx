import { CategoryCert, Cert } from '@/src/entities'
import moment from 'moment'
import { FC } from 'react'
import { ActionsWithCertificateBtn } from './ActionsWithCertificateBtn'

interface CertificateTableRowProps {
	cert: Cert | null
	categoryCert: CategoryCert
}

export const CertificateTableRow: FC<CertificateTableRowProps> = ({
	cert,
	categoryCert
}) => {
	return (
		<>
			<td className="pl-3 py-3 align-middle text-[14px] text-[#202020] font-medium leading-[20px]">
				<span className="block max-w-[190px] whitespace-normal break-all [overflow-wrap:anywhere]">
					{cert?.certname}
				</span>
			</td>
			<td className="py-3 align-middle text-[12px] text-[#7f7f7f] font-medium leading-[16px]">
				<span className="block max-w-[190px] whitespace-normal break-all [overflow-wrap:anywhere]">
					{cert?.certnumber}
				</span>
			</td>
			<td className="py-3 align-middle max-w-[190px] min-w-0">
				{categoryCert?.categoryname ? (
					<span className="inline-block py-[3px] px-[9px] max-w-[190px] whitespace-normal break-all [overflow-wrap:anywhere] bg-[rgba(241,228,251,0.5)] rounded-[12px] text-[12px] text-[#202020] leading-[16px]">
						{categoryCert?.categoryname}
					</span>
				) : (
					'—'
				)}
			</td>
			<td className="py-3 align-middle text-[14px] text-[#7f7f7f] leading-[20px]">
				<span className="block max-w-[190px] whitespace-normal">
					{moment(cert?.issuedate).format('DD.MM.YYYY')}
				</span>
			</td>
			<td className="py-3 align-middle text-[14px] text-[#202020] font-medium leading-[20px]">
				<span className="block max-w-[190px] whitespace-normal">
					{moment(cert?.certvalidityperiod).format('DD.MM.YYYY')}
				</span>
			</td>
			<td className="py-3 align-middle max-w-[190px]">
				{cert?.statuscert_id === '2' ? (
					<span className="text-[12px] text-[#A65F00] max-w-[190px] whitespace-normal font-medium bg-[#FEF9C2] py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-[#A65F00] bg-[url(/warning.svg)] bg-no-repeat bg-[11px]">
						Истекает
					</span>
				) : cert?.statuscert_id === '3' ? (
					<span className="text-[12px] text-[#C10007] max-w-[190px] whitespace-normal font-medium bg-[#FFE2E2] py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-[#FFC9C9] bg-[url(/red-close.svg)] bg-no-repeat bg-[11px]">
						Просрочен
					</span>
				) : cert?.statuscert_id === '1' ? (
					<span className="text-[12px] text-green-600 max-w-[190px] whitespace-normal font-medium bg-green-100 py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-green-400 bg-[url(/active.svg)] bg-no-repeat bg-[11px]">
						Активен
					</span>
				) : (
					<span className="text-[12px] text-gray-600 max-w-[190px] whitespace-normal font-medium bg-gray-100 py-[3px] pr-[12px] pl-[32px] rounded-[12px] border-1 border-gray-400 bg-[url(/archive.svg)] bg-no-repeat bg-[11px]">
						Архив
					</span>
				)}
			</td>
			<td className="py-3 align-middle pr-[20px]">
				<div className="flex justify-end">
					<ActionsWithCertificateBtn cert={cert} />
				</div>
			</td>
		</>
	)
}
