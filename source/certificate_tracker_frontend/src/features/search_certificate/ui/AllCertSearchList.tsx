import { Cert } from '@/src/entities'
import { FC } from 'react'
import { AllCertSearchItem } from './AllCertSearchItem'

interface AllCertSearchListProps {
	allCert: Cert[]
}

export const AllCertSearchList: FC<AllCertSearchListProps> = ({ allCert }) => {
	return (
		<table className="w-full">
			<tbody>
				{allCert?.length > 0 ? (
					allCert?.map(item => (
						<tr key={item.id} className="border-b-1 border-[#E0DFDF]">
							<AllCertSearchItem cert={item} />
						</tr>
					))
				) : (
					<tr>
						<td>Сертификаты не найдены или отсутствуют</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}
