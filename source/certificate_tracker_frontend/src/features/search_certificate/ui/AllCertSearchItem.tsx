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
		// <div className="w-full flex item-center justify-between">
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
			<td>
				<ActionsWithCertificateBtn cert={cert} />
			</td>
		</>
		// </div>
	)
}
