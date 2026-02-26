'use client'

import { Cert } from '@/src/entities'
import { FC, useState } from 'react'

interface ActionsWithCertificateBtnProps {
	cert: Cert | null
}

export const ActionsWithCertificateBtn: FC<ActionsWithCertificateBtnProps> = ({
	cert
}) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="relative">
			<button
				onClick={() => {
					console.log(cert)
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
					<a
						className="block text-[14px]"
						href=""
						target="_blank"
						rel="noopener noreferrer"
					>
						Просмотр документа
					</a>
					<button className="text-left text-[14px] text-purple-600">
						Внести изменения
					</button>
					<button className="text-[14px] text-red-600">Архивировать</button>
				</div>
			)}
		</div>
	)
}
