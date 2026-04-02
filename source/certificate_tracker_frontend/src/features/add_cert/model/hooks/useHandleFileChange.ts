'use client'

import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

type DocField = 'docs_cert' | 'docs_prot'

export const useHandleFileChange = () => {
	const [base64, setBase64] = useState<Partial<Record<DocField, string>>>({})
	const form = useFormContext<any>()

	const handleChangeFile = (
		e: React.ChangeEvent<HTMLInputElement>,
		field: DocField
	) => {
		const file = e.target.files?.[0]

		if (file) {
			const reader = new FileReader()

			reader.onload = function (e) {
				const base64 = e?.target?.result
				if (base64) {
					setBase64(prev => ({ ...prev, [field]: String(base64) }))
					form?.setValue(field, String(base64))
				}
			}

			reader.readAsDataURL(file)
		}
	}

	return {
		base64,
		handleChangeFile
	}
}
