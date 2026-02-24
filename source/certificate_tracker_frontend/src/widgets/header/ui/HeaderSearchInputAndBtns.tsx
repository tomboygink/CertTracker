'use client'

import { AddCertBtn } from '@/src/features'
import { useState } from 'react'

export const HeaderSearchInputAndBtns = () => {
	const [searchValue, setSearchValue] = useState<string>('')
	const [notifications, setNotifications] = useState<boolean>(true)

	return (
		<div className="flex items-center justify-between w-full h-full px-[32px] py-[14px]">
			<input
				className="block min-w-[300px] max-w-[560px] w-full h-[36px] pl-[36px] text-[14px] text-[#7f7f7f] rounded-[6px] bg-[var(--bg-search-input)] bg-[url(/searchSvg.svg)] bg-no-repeat bg-[10px] shadow-[0_2px_2px_rgba(0,0,0,0.05)] focus:outline-[var(--bg-color)]"
				type="search"
				placeholder="Поиск по сертификатам..."
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
			/>
			<div className="flex items-center gap-[16px]">
				<button className="relative flex items-center justify-center w-[36px] h-[36px] border-1 border-[#e0dfdf] rounded-[6px] cursor-pointer">
					<svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24">
						<path
							stroke="color(display-p3 .1255 .1255 .1255)"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 1 0 6 8c0 4.499-1.411 5.956-2.738 7.326Z"
						/>
					</svg>
					{notifications && (
						<div className="absolute top-[-3px] right-[-3px] flex items-center justify-center w-[12px] h-[12px] rounded-[50%] bg-white border-1 border-red-300">
							<div className="w-[6px] h-[6px] rounded-[50%] bg-red-300"></div>
						</div>
					)}
				</button>
				{/* <button className="px-[16px] py-[8px] bg-[var(--bg-color)] rounded-[6px] font-medium text-[14px] text-white cursor-pointer">
					+ Добавить
				</button> */}
				<AddCertBtn />
			</div>
		</div>
	)
}
