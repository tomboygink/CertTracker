'use client'

import { useAppDispatch } from '@/src/shared'
import { openModal } from '@/src/widgets'

export const AddCategoryCertBtn = () => {
	const dispatch = useAppDispatch()

	return (
		<button
			onClick={() => dispatch(openModal({ type: 'addCategory', payload: {} }))}
			className="px-[16px] py-[8px] text-[10px] bg-[var(--bg-color)] rounded-[6px] font-medium text-white cursor-pointer hover:bg-[var(--bg-color-hover)] transition-all duration-300 sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px]"
		>
			+ Добавить категорию
		</button>
	)
}
