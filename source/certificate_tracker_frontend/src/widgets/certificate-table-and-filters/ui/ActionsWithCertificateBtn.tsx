'use client'

import {
	Cert,
	setSelectCert,
	useCertDocsQuery,
	useLazyCertDocsQuery
} from '@/src/entities'
import { ArchiveBtn, ChangeCertBtn, WatchDocBtn } from '@/src/features'
import { useAppDispatch, useAppSelector, useClickOutside } from '@/src/shared'
import { FC, useEffect, useRef, useState } from 'react'

interface ActionsWithCertificateBtnProps {
	cert: Cert | null
}

export const ActionsWithCertificateBtn: FC<ActionsWithCertificateBtnProps> = ({
	cert
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const dispatch = useAppDispatch()

	const divRef = useRef<HTMLDivElement | null>(null)
	useClickOutside(divRef, () => setIsOpen(false))

	const handleClose = () => {
		setIsOpen(false)
	}

	return (
		<div ref={divRef} className="relative">
			<button
				onClick={() => {
					if (!cert) return
					dispatch(setSelectCert(cert))
					setIsOpen(prev => (prev = !prev))
				}}
				className="flex items-center justify-center w-8 h-8 border-1 border-[#e0dfdf] rounded-[6px] cursor-pointer"
			>
				<svg className="w-6 h-6 fill-[#202020]" fill="none" viewBox="0 0 24 24">
					<path d="M18 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
				</svg>
			</button>
			{isOpen && (
				<div className="absolute top-10 right-10 flex flex-col items-start gap-[8px] p-4 bg-white border-1 border-[#e0dfdf] rounded-[6px]">
					<WatchDocBtn handleClose={handleClose} cert={cert} />
					<ChangeCertBtn handleClose={handleClose} />
					{cert?.statuscert_id !== '4' && (
						<ArchiveBtn cert={cert} handleClose={handleClose} />
					)}
				</div>
			)}
		</div>
	)
}
