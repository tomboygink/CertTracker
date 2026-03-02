'use client'

import { Cert } from '@/src/entities'
import { FC } from 'react'
import { useAddCertInArchive } from '../hooks/useAddCertInArchive'

interface ArchiveBtnProps {
	cert: Cert | null
	handleClose: () => void
}

export const ArchiveBtn: FC<ArchiveBtnProps> = ({ cert, handleClose }) => {
	const { handleAddCertInArchive } = useAddCertInArchive(cert)

	return (
		<button
			onClick={() => {
				handleAddCertInArchive()
				handleClose()
			}}
			className="text-[14px] text-red-600 cursor-pointer"
		>
			Архивировать
		</button>
	)
}
