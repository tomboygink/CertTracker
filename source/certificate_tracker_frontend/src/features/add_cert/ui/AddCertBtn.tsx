'use client'

import { useAppDispatch } from '@/src/shared'
import { openModal } from '@/src/widgets'
import { FC } from 'react'

interface AddCertBtnProps {
	text: string
}

export const AddCertBtn: FC<AddCertBtnProps> = ({ text }) => {
	const dispatch = useAppDispatch()

	return (
		<button
			onClick={() =>
				dispatch(openModal({ type: 'addCert', payload: undefined }))
			}
			className="shrink-0 px-[10px] py-[5px] text-xs bg-[var(--bg-color)] rounded-[6px] font-medium sm:px-[10px] sm:py-[5px] sm:text-sm md:px-[16px] md:py-[8px] md:text-[14px] lg:text-[14px] lg:px-[16px] lg:py-[8px] xl:px-[16px] xl:py-[8px] xl:text-[14px] 2xl:text-[14px] 2xl:px-[16px] 2xl:py-[8px] text-white cursor-pointer hover:bg-[var(--bg-color-hover)] transition-all duration-300"
		>
			{text}
		</button>
	)
}
