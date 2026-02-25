import { Cert } from '@/src/entities'
import moment from 'moment'
import { FC } from 'react'

interface RequireAttensionCertItemProps {
	certificate: Cert
}

export const RequireAttensionCertItem: FC<RequireAttensionCertItemProps> = ({
	certificate
}) => {
	return (
		<>
			<td className="pl-10">
				<div className="flex flex-col">
					<p className="text-[14px] text-[#202020] font-medium leading-[20px]">
						{certificate.certname}
					</p>
					<span className="text-[12px] text-[#7f7f7f] font-medium leading-[16px]">
						{certificate.certnumber}
					</span>
				</div>
			</td>
			<td>
				<p className="text-[14px] text-[#7f7f7f] leading-[20px]">
					{moment(certificate.issuedate).format('DD.MM.YYYY')}
				</p>
			</td>
			<td>
				<p className="text-[14px] text-[#202020] font-medium leading-[20px]">
					{moment(certificate.certvalidityperiod).format('DD.MM.YYYY')}
				</p>
			</td>
			<td>
				<div className="">
					{certificate.statuscert_id === '2' ? (
						<span className="text-[12px] text-[#A65F00] font-medium bg-[#FEF9C2] py-[3px] px-[12px] rounded-[12px] border-1 border-[#A65F00]">
							Истекает
						</span>
					) : certificate.statuscert_id === '3' ? (
						<span className="text-[12px] text-[#C10007] font-medium bg-[#FFE2E2] py-[3px] px-[12px] rounded-[12px] border-1 border-[#FFC9C9]">
							Просрочен
						</span>
					) : (
						<span className="text-[12px] text-green-600 font-medium bg-green-100 py-[3px] px-[12px] rounded-[12px] border-1 border-green-400">
							Активен
						</span>
					)}
				</div>
			</td>
		</>
	)
}
