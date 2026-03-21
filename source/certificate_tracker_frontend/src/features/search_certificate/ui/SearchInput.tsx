'use client'

import { FC, InputHTMLAttributes, useMemo, useRef, useState } from 'react'
import '../style/style.css'
import { Cert } from '@/src/entities'
import { AllCertSearchList } from './AllCertSearchList'
import { useClickOutside } from '@/src/shared'
import { useFilteredCertBySearch } from '../hooks/useFilteredCertBySearch'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
	allCert?: Cert[]
	isSearchible?: boolean
}

export const SearchInput: FC<SearchInputProps> = props => {
	const { allCert, isSearchible, ...other } = props
	const [searchValue, setSearchValue] = useState<string>('')

	const filteredCertBySearch = useFilteredCertBySearch(
		searchValue,
		allCert ?? []
	)

	const labelRef = useRef<HTMLLabelElement | null>(null)
	useClickOutside(labelRef, () => setSearchValue(''))

	return (
		<label ref={labelRef} className="relative w-full">
			<input
				className="block min-w-[300px] max-w-[560px] w-full h-[36px] pl-[36px] text-[14px] text-[#7f7f7f] border-1 border-transparent rounded-[6px] bg-[var(--bg-search-input)] bg-[url(/searchSvg.svg)] bg-no-repeat bg-[10px] shadow-[0_2px_2px_rgba(0,0,0,0.05)] hover:border-1 hover:border-[var(--bg-color)] focus:outline-[var(--bg-color)] transition-all duration-300"
				type="search"
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
				{...other}
			/>
			{isSearchible && searchValue?.length > 0 ? (
				<div className="absolute top-[50px] left-0 p-3 w-full sm:w-[500px] md:w-[600px] lg:w-5/10 h-[300px] z-[5] bg-white border-1 border-[#E0DFDF] rounded-md shadow-md overflow-y-auto no-scrollbar">
					<AllCertSearchList allCert={filteredCertBySearch} />
				</div>
			) : null}
		</label>
	)
}
