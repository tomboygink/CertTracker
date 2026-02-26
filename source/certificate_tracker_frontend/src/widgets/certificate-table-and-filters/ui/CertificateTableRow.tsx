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
			<td className="pl-3 text-[14px] text-[#202020] font-medium leading-[20px]">
				{cert?.certname}
			</td>
			<td className="text-[12px] text-[#7f7f7f] font-medium leading-[16px]">
				{cert?.certnumber}
			</td>
			<td>
				<span className="py-[3px] px-[9px] bg-[rgba(241,228,251,0.5)] rounded-[12px] text-[12px] text-[#202020] leading-[16px]">
					{categoryCert.categoryname}
				</span>
			</td>
			<td className="text-[14px] text-[#7f7f7f] leading-[20px]">
				{moment(cert?.issuedate).format('DD.MM.YYYY')}
			</td>
			<td className="text-[14px] text-[#202020] font-medium leading-[20px]">
				{moment(cert?.certvalidityperiod).format('DD.MM.YYYY')}
			</td>
			<td>
				{cert?.statuscert_id === '2' ? (
					<span className="text-[12px] text-[#A65F00] font-medium bg-[#FEF9C2] py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-[#A65F00] bg-[url(/warning.svg)] bg-no-repeat bg-[11px]">
						Истекает
					</span>
				) : cert?.statuscert_id === '3' ? (
					<span className="text-[12px] text-[#C10007] font-medium bg-[#FFE2E2] py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-[#FFC9C9] bg-[url(/red-close.svg)] bg-no-repeat bg-[11px]">
						Просрочен
					</span>
				) : (
					<span className="text-[12px] text-green-600 font-medium bg-green-100 py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-green-400 bg-[url(/active.svg)] bg-no-repeat bg-[11px]">
						Активен
					</span>
				)}
			</td>
			<td className="pr-3">
				<ActionsWithCertificateBtn cert={cert} />
			</td>
		</>
	)
}
