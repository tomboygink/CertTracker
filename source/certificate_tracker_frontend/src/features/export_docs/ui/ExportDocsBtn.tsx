'use client'

import { ButtonHTMLAttributes, FC } from 'react'

interface ExportDocsBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
}

export const ExportDocsBtn: FC<ExportDocsBtnProps> = ({ text }) => {
	return (
		<button className="flex items-center gap-1 py-[5px] px-[12px] bg-white rounded-[6px] border-1 border-[#e0dfdf] text-[14px] font-medium leading-[20px] cursor-pointer">
			<svg className={`w-[22px] h-[22px]`} fill="none" viewBox="0 0 24 24">
				<path
					fill="#202020"
					d="m12 14-.707.707.707.707.707-.707zm1-9a1 1 0 0 0-2 0zM7 9a1 1 0 0 0 0 1.414l4.293 4.293 1.414-1.414L8.414 9A1 1 0 0 0 7 9m5.707 5.707L17 10.414A1 1 0 0 0 15.586 9l-4.293 4.293zM13 14V5h-2v9z"
				/>
				<path
					stroke="#202020"
					strokeWidth="2"
					d="M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
				/>
			</svg>
			{text}
		</button>
	)
}
