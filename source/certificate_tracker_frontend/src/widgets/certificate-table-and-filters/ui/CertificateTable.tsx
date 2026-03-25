'use client'

import { CategoryCert, Cert } from '@/src/entities'
import { FilterTabBtnList, SearchInput } from '@/src/features'
import { FC, useState } from 'react'
import { CertificateTableRow } from './CertificateTableRow'
import { CertificateMobileCard } from './CertificateMobileCard'
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
	const [selectCategoryes, setSelectCategoryes] = useState<string[]>([])
	const { allCategoryCert, allCertificates } = useGetAllCertAndCategoryesData()

	const filteredCertificates = useFilteredCertFromSearchAndTabs(
		allCertificates?.data,
		allCategoryCert?.data,
		searchValue,
		activeTab,
		setActiveTab,
		selectCategoryes
	)

	const handleClickFilterBtn = (status: string | null) => {
		setActiveTab(status)
	}

	return (
		<div className="w-full h-[calc(100vh-165px)] p-[17px] bg-white border-1 border-[#e0dfdf] rounded-[12px] flex flex-col">
			<div className="flex flex-col items-start justify-between gap-4 mb-[24px] md:flex-col md:items-start md:gap-4 lg:flex-row lg:items-center lg:gap-4">
				<SearchInput
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
					placeholder="Поиск по названию или номеру..."
				/>
				<FilterTabBtnList
					selectCategoryes={selectCategoryes}
					setSelectCategoryes={setSelectCategoryes}
					allCategoryCert={allCategoryCert?.data}
					setSearchValue={setSearchValue}
					status={activeTab}
					setStatus={handleClickFilterBtn}
				/>
			</div>
			<div className="flex-1 overflow-hidden">
				{/* Контейнер с прокруткой */}
				<div className="overflow-y-auto h-full pb-4 no-scrollbar">
					{/* Десктопная таблица */}
					<table
						style={{ verticalAlign: 'top' }}
						className="w-full rounded-[6px] table-fixed rounded-[12px] hidden xl:table"
					>
						<thead className="sticky top-0 z-[2] px-[16px] py-[12px] bg-[#d9d9d9] h-10">
							<tr>
								<td className="py-2 text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-1/6 max-w-[200px] pl-3">
									<span className="block max-w-[200px] whitespace-normal">
										Название
									</span>
								</td>
								<td className="py-2 text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-1/6 max-w-[190px]">
									<span className="block max-w-[190px] whitespace-normal">
										Номер
									</span>
								</td>
								<td className="py-2 text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-1/6 max-w-[190px]">
									<span className="block max-w-[190px] whitespace-normal">
										Категория
									</span>
								</td>
								<td className="py-2 text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-1/6 max-w-[190px]">
									<span className="block max-w-[190px] whitespace-normal">
										Начало действия
									</span>
								</td>
								<td className="py-2 text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-1/6 max-w-[190px]">
									<span className="block max-w-[190px] whitespace-normal">
										Окончание действия
									</span>
								</td>
								<td className="py-2 text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-1/6 max-w-[190px]">
									<span className="block max-w-[190px] whitespace-normal">
										Статус
									</span>
								</td>
								<td className="w-1/6"></td>
							</tr>
						</thead>
						<tbody>
							{filteredCertificates?.map(item => (
								<tr
									key={item.key}
									className="py-[16px] border-b-1 border-gray-200 align-middle"
								>
									<CertificateTableRow
										cert={item?.cert ?? null}
										categoryCert={item.category}
									/>
								</tr>
							))}
						</tbody>
					</table>

					{/* Мобильные карточки */}
					<div className="flex flex-col gap-[16px] xl:hidden">
						{filteredCertificates?.map(item => (
							<CertificateMobileCard
								key={item.key}
								cert={item?.cert ?? null}
								categoryCert={item.category}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
