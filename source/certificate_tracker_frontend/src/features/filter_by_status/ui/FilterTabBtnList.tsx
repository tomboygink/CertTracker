'use client'

import { useState } from 'react'
import { FILTER_TABS_CONFIG } from '../config/FILTER_TABS_CONFIG.config'
import { FilterTabBtn } from './FilterTabBtn'
import { OtherFilterBtn } from './OtherFilterBtn'

export const FilterTabBtnList = () => {
	const [activeTabStatus, setActiveTabStatus] = useState<string | null>(null)

	const handleSetStatus = (status: string | null) => {
		setActiveTabStatus(status)
	}

	return (
		<div className="flex items-center gap-[8px]">
			<ul className="flex items-center gap-[8px]">
				{FILTER_TABS_CONFIG.map(item => (
					<li key={item.status}>
						<FilterTabBtn
							onClick={() => handleSetStatus(item.status)}
							text={item.text}
							isActive={activeTabStatus === item.status}
						/>
					</li>
				))}
			</ul>
			<OtherFilterBtn />
		</div>
	)
}
