'use client'

import { Dispatch, FC, SetStateAction, useState } from 'react'
import { FILTER_TABS_CONFIG } from '../config/FILTER_TABS_CONFIG.config'
import { FilterTabBtn } from './FilterTabBtn'
import { CategoryCert } from '@/src/entities'
import { OtherFilterBtn } from '@/src/features'

interface FilterTabBtnListProps {
	status: string | null
	setStatus: (status: string | null) => void
	setSearchValue: (str: string) => void
	allCategoryCert: CategoryCert[]
	selectCategoryes: string[]
	setSelectCategoryes: Dispatch<SetStateAction<string[]>>
}

export const FilterTabBtnList: FC<FilterTabBtnListProps> = ({
	status,
	setStatus,
	setSearchValue,
	allCategoryCert,
	selectCategoryes,
	setSelectCategoryes
}) => {
	return (
		<div className="flex items-start gap-[8px] flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap">
			<ul className="flex items-center gap-[8px] flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap">
				{FILTER_TABS_CONFIG.map(item => (
					<li key={item.status}>
						<FilterTabBtn
							onClick={() => {
								if (item.status !== null) {
									setSearchValue('')
									setStatus(item.status)
								} else {
									setStatus(item.status)
								}
							}}
							text={item.text}
							isActive={status === item.status}
						/>
					</li>
				))}
				<OtherFilterBtn
				setSearchValue={setSearchValue}
				selectCategoryes={selectCategoryes}
				setSelectCategoryes={setSelectCategoryes}
				allCategory={allCategoryCert}
			/>
			</ul>
		</div>
	)
}
