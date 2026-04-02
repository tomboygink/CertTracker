'use client'

import { Cert, useLazyCertDocsQuery } from '@/src/entities'
import { ButtonHTMLAttributes, FC } from 'react'
import { handleGetDocsAndRedirect } from '../services/handleGetDocsAndRedirect'

interface WatchProtocolBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	handleClose?: () => void
	cert: Cert | null
}

export const WatchProtocolBtn: FC<WatchProtocolBtnProps> = ({
	handleClose,
	cert,
	className,
	...buttonProps
}) => {
	const [getDocs, _] = useLazyCertDocsQuery()

	if (!cert) return null

	return (
		<button
			{...buttonProps}
			onClick={e => {
				e.preventDefault()
				e.stopPropagation()
				handleGetDocsAndRedirect({
					getDocs,
					cert,
					handleClose: handleClose ?? (() => {}),
					field: 'docs_prot',
					notAttachedMessage: 'Протокол не прикреплен'
				})
			}}
			className={className ?? 'block text-left text-[14px] cursor-pointer'}
		>
			Просмотр протокола
		</button>
	)
}
