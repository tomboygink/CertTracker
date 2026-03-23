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
			<td className="pl-4 sm:pl-10">
				<div className="flex flex-col max-w-[200px]">
					<p className="text-[14px] text-[#202020] font-medium leading-[20px]">
						{certificate.certname}
					</p>
					<span className="text-[12px] text-[#7f7f7f] font-medium leading-[16px]">
						{certificate.certnumber}
					</span>
				</div>
			</td>
			<td>
				<p className="text-[14px] text-[#7f7f7f] leading-[20px] max-w-[150px]">
					{moment(certificate.issuedate).format('DD.MM.YYYY')}
				</p>
			</td>
			<td>
				<p className="text-[14px] text-[#202020] font-medium leading-[20px] max-w-[150px]">
					{moment(certificate.certvalidityperiod).format('DD.MM.YYYY')}
				</p>
			</td>
			<td>
				<div className="">
					{certificate.statuscert_id === '2' ? (
						<span className="text-[12px] text-[#A65F00] font-medium bg-[#FEF9C2] py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-[#A65F00] bg-[url(/warning.svg)] bg-no-repeat bg-[11px]">
							Истекает
						</span>
					) : certificate.statuscert_id === '3' ? (
						<span className="text-[12px] text-[#C10007] font-medium bg-[#FFE2E2] py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-[#FFC9C9] bg-[url(/red-close.svg)] bg-no-repeat bg-[11px]">
							Просрочен
						</span>
					) : (
						<span className="text-[12px] text-green-600 font-medium bg-green-100 py-[3px] pr-[12px] pl-[29px] rounded-[12px] border-1 border-green-400 bg-[url(/active.svg)] bg-no-repeat bg-[11px]">
							Активен
						</span>
					)}
				</div>
			</td>
		</>
	)
}
