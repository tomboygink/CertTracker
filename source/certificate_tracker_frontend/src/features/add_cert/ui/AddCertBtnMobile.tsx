'use client'

import { useAppDispatch } from '@/src/shared'
import { openModal } from '@/src/widgets'

export const AddCertBtnMobile = () => {
	const dispatch = useAppDispatch()

	return (
		<button
			onClick={() =>
				dispatch(openModal({ type: 'addCert', payload: undefined }))
			}
			className="flex items-center justify-center w-[36px] h-[36px] shrink-0 bg-[var(--bg-color)] rounded-[8px] cursor-pointer hover:bg-[var(--bg-color-hover)] transition-all duration-300"
			aria-label="Добавить сертификат"
		>
			<svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
				<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
			</svg>
		</button>
	)
}
