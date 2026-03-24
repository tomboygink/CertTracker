import { Cert } from '@/src/entities'
import { ActionsWithCertificateBtn } from '@/src/widgets/certificate-table-and-filters/ui/ActionsWithCertificateBtn'
import { FC } from 'react'
import { ListSearchItemInfo } from './ListSearchItemInfo'
import moment from 'moment'

interface AllCertSearchItemProps {
	cert: Cert
}

export const AllCertSearchItem: FC<AllCertSearchItemProps> = ({ cert }) => {
	return (
		<>
			<ListSearchItemInfo label="Название" text={cert?.certname} />
			<ListSearchItemInfo label="Номер" text={cert?.certnumber} />
			<ListSearchItemInfo
				label="Начало действия"
				text={moment(cert?.issuedate).format('DD.MM.YYYY')}
			/>
			<ListSearchItemInfo
				label="Окончание действия"
				text={moment(cert?.certvalidityperiod).format('DD.MM.YYYY')}
			/>
			<td className="block xl:table-cell py-2 xl:py-0 border-t-1 border-gray-100 xl:border-none w-full xl:w-auto mt-2 xl:mt-0 align-middle">
				<div className="flex justify-end items-center w-full xl:w-auto xl:justify-start">
					<ActionsWithCertificateBtn cert={cert} />
				</div>
			</td>
		</>
	)
}
