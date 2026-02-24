'use client'

import { useState } from "react"
import { useFormContext } from "react-hook-form"

export const useHandleFileChange = () => {
    const [base64, setBase64] = useState<string | null>(null)
    const form = useFormContext<any>()

    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]

		if (file) {
			const reader = new FileReader()

			reader.onload = function (e) {
				const base64 = e?.target?.result
				if (base64) {
					setBase64(String(base64))
					form?.setValue('docs', String(base64))
					console.log(base64)
				}
			}

			reader.readAsDataURL(file)
		} else {
			console.log('Error: No file selected')
		}
	}

    return {
        base64, 
        handleChangeFile
    }

}