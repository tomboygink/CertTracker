'use client'

import { useAppDispatch } from '@/src/shared'
import { openModal } from '@/src/widgets'

export const AddCertBtn = () => {
	const dispatch = useAppDispatch()

	return (
		<button
			onClick={() =>
				dispatch(openModal({ type: 'addCert', payload: undefined }))
			}
			className="px-[16px] py-[8px] bg-[var(--bg-color)] rounded-[6px] font-medium text-[14px] text-white cursor-pointer"
		>
			+ Добавить
		</button>
	)
}
