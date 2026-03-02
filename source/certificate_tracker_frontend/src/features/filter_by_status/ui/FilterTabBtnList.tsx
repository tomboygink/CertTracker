'use client'

import { FC, useState } from 'react'
import { FILTER_TABS_CONFIG } from '../config/FILTER_TABS_CONFIG.config'
import { FilterTabBtn } from './FilterTabBtn'
import { OtherFilterBtn } from './OtherFilterBtn'

interface FilterTabBtnListProps {
	status: string | null
	setStatus: (status: string | null) => void
}

export const FilterTabBtnList: FC<FilterTabBtnListProps> = ({
	status,
	setStatus
}) => {
	return (
		<div className="flex items-center gap-[8px]">
			<ul className="flex items-center gap-[8px]">
				{FILTER_TABS_CONFIG.map(item => (
					<li key={item.status}>
						<FilterTabBtn
							onClick={() => setStatus(item.status)}
							text={item.text}
							isActive={status === item.status}
						/>
					</li>
				))}
			</ul>
			<OtherFilterBtn />
		</div>
	)
}
