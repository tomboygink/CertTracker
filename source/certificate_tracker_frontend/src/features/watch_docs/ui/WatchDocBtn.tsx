'use client'

import { Cert, useLazyCertDocsQuery } from '@/src/entities'
import { ButtonHTMLAttributes, FC } from 'react'
import { handleGetDocsAndRedirect } from '../services/handleGetDocsAndRedirect'

interface WatchDocLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	handleClose: () => void
	cert: Cert | null
}

export const WatchDocBtn: FC<WatchDocLinkProps> = ({ handleClose, cert }) => {
	const [getDocs, _] = useLazyCertDocsQuery()

	if (!cert) return null

	return (
		<button
			onClick={e => {
				e.preventDefault()
				e.stopPropagation()
				handleGetDocsAndRedirect({ getDocs, cert, handleClose })
			}}
			className="block text-left text-[14px] cursor-pointer"
		>
			Просмотр документа
		</button>
	)
}
