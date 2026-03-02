'use client'

import { CategoryCert, Cert } from '@/src/entities'
import { FilterTabBtnList, SearchInput } from '@/src/features'
import { FC, useState } from 'react'
import { CertificateTableRow } from './CertificateTableRow'
import { useGetAllCertAndCategoryesData } from '../hooks/useGetAllCertAndCategoryesData'
import { useFilteredCertFromSearchAndTabs } from '../hooks/useFilteredCertFromSearchAndTabs'

interface CertificateTableProps {
	certificates: Cert[]
	categoryCert: CategoryCert[]
}

export const CertificateTable: FC<CertificateTableProps> = ({
	certificates,
	categoryCert
}) => {
	const [activeTab, setActiveTab] = useState<string | null>(null)
	const [searchValue, setSearchValue] = useState<string>('')
	const { allCategoryCert, allCertificates } = useGetAllCertAndCategoryesData(
		certificates,
		categoryCert
	)

	const filteredCertificates = useFilteredCertFromSearchAndTabs(
		allCertificates?.data,
		allCategoryCert?.data,
		searchValue,
		activeTab,
		setActiveTab
	)

	const handleClickFilterBtn = (status: string | null) => {
		setActiveTab(status)
	}

	return (
		<div className="w-full h-[calc(100vh-165px)] p-[17px] bg-white border-1 border-[#e0dfdf] rounded-[12px] flex flex-col">
			<div className="flex items-center justify-between mb-[24px]">
				<SearchInput
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					placeholder="Поиск по названию или номеру..."
				/>
				<FilterTabBtnList status={activeTab} setStatus={handleClickFilterBtn} />
			</div>
			<div className="flex-1 overflow-hidden">
				{/* Контейнер с прокруткой */}
				<div className="overflow-y-auto h-full">
					<table
						style={{ verticalAlign: 'top' }}
						className="w-full rounded-[6px] table-auto rounded-[12px]"
					>
						<thead className="sticky top-0 z-[2] px-[16px] py-[12px] bg-[#d9d9d9] h-10">
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
							{filteredCertificates?.map(item => (
								<tr
									key={item.key}
									className="h-[71px] max-h-[71px] py-[16px] border-b-1 border-gray-200"
								>
									<CertificateTableRow
										cert={item?.cert ?? null}
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
