'use client'

import { CategoryCert } from '@/src/entities'
import { FormInput } from '@/src/shared'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

interface OtherFilterBtnProps {
	allCategory: CategoryCert[]
	selectCategoryes: string[]
	setSelectCategoryes: Dispatch<SetStateAction<string[]>>
	setSearchValue: (str: string) => void
}

export const OtherFilterBtn: FC<OtherFilterBtnProps> = ({
	allCategory,
	selectCategoryes,
	setSelectCategoryes,
	setSearchValue
}) => {
	const [open, setOpen] = useState<boolean>(false)

	const handleSetSelectCat = (id: string, checked: boolean) => {
		setSelectCategoryes((prev: string[]) => {
			if (checked) {
				setSearchValue('')
				return [...prev, id]
			} else {
				setSearchValue('')
				return prev.filter((catId: string) => catId !== id)
			}
		})
	}

	if (!allCategory) return null

	return (
		<div className="relative">
			<button
				onClick={() => setOpen(prev => (prev = !prev))}
				className="w-[36px] h-[36px] border-1 border-[#e0dfdf] rounded-[6px] bg-[url(/filters.svg)] bg-no-repeat bg-center cursor-pointer hover:border-[var(--bg-color)] hover:shadow-md transition-all duration-300"
			></button>
			{open && (
				<div className="absolute top-10 right-0 z-20 min-w-[200px] flex bg-white p-4 rounded-md border-1 border-[#E0DFDF] shadow-md">
					<ul className="flex items-start flex-col gap-3">
						{allCategory?.map(item => (
							<li key={item.id} className="flex items-center gap-[8px]">
								<FormInput
									checked={selectCategoryes.includes(item.id)}
									onChange={e => handleSetSelectCat(item.id, e.target.checked)}
									type="checkbox"
								/>
								<span>{item.categoryname}</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
