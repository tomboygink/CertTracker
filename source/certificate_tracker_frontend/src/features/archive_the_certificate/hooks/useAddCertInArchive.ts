'use client'

import { Cert, useArchiveCertMutation } from '@/src/entities'
import { useAppSelector } from '@/src/shared'

export const useAddCertInArchive = (cert: Cert | null) => {
	const [archiveCert] = useArchiveCertMutation()
	const user = useAppSelector(state => state.user.user)

	const handleAddCertInArchive = () => {
		archiveCert({ id: Number(cert?.id), user_id: Number(user?.id) })
	}

	return { handleAddCertInArchive }
}
