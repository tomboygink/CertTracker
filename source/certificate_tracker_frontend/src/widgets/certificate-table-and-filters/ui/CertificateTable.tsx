'use client'

import {
	CategoryCert,
	Cert,
	useAllCategoryCertQuery,
	useAllCertQuery
} from '@/src/entities'
import { FilterTabBtnList, SearchInput } from '@/src/features'
import { FC, useMemo } from 'react'
import { CertificateTableRow } from './CertificateTableRow'
import { useGetAllCertAndCategoryesData } from '../hooks/useGetAllCertAndCategoryesData'
import { generationCertificatesWithCategory } from '../services/generationCertificatesWithCategory'

interface CertificateTableProps {
	certificates: Cert[]
	categoryCert: CategoryCert[]
}

export const CertificateTable: FC<CertificateTableProps> = ({
	certificates,
	categoryCert
}) => {
	const { allCategoryCert, allCertificates } = useGetAllCertAndCategoryesData(
		certificates,
		categoryCert
	)

	const certWithCategory = useMemo(() => {
		return generationCertificatesWithCategory(allCertificates, allCategoryCert)
	}, [allCertificates, allCategoryCert])

	return (
		<div className="w-full h-[calc(100vh-165px)] p-[17px] bg-white border-1 border-[#e0dfdf] rounded-[12px] flex flex-col">
			<div className="flex items-center justify-between mb-[24px]">
				<SearchInput placeholder="Поиск по названию или номеру..." />
				<FilterTabBtnList />
			</div>
			<div className="flex-1 overflow-hidden">
				{/* Контейнер с прокруткой */}
				<div className="overflow-y-auto h-full">
					<table className="w-full rounded-[6px] table-auto rounded-[12px] h-full">
						<thead className="sticky top-0 px-[16px] py-[12px] bg-[#d9d9d9] h-10">
							<tr>
								<td className="text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-1/6 pl-3">
									Название
								</td>
								<td className="text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-1/6">
									Номер
								</td>
								<td className="text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-1/6">
									Категория
								</td>
								<td className="text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-1/6">
									Создан
								</td>
								<td className="text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-1/6">
									Истекает
								</td>
								<td className="text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-1/6">
									Статус
								</td>
								<td className="w-1/6"></td>
							</tr>
						</thead>
						<tbody>
							{certWithCategory?.map(item => (
								<tr
									key={item.key}
									className="h-[71px] py-[16px] border-b-1 border-gray-200"
								>
									<CertificateTableRow
										cert={item.cert ?? null}
										categoryCert={item.category}
									/>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
