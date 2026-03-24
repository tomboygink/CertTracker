import { Cert } from '@/src/entities'
import { FC } from 'react'
import { AllCertSearchItem } from './AllCertSearchItem'

interface AllCertSearchListProps {
	allCert: Cert[]
}

export const AllCertSearchList: FC<AllCertSearchListProps> = ({ allCert }) => {
	return (
		<table className="w-full block xl:table">
			<tbody className="block w-full xl:table-row-group">
				{allCert?.length > 0 ? (
					allCert?.map(item => (
						<tr key={item.id} className="block xl:table-row w-full py-4 xl:py-0 border-b-1 border-[#E0DFDF]">
							<AllCertSearchItem cert={item} />
						</tr>
					))
				) : (
					<tr className="block w-full xl:table-row">
						<td className="block text-center py-4 text-gray-500 xl:table-cell">Сертификаты не найдены или отсутствуют</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}
