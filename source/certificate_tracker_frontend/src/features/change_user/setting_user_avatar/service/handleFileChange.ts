import { UseFormSetValue } from 'react-hook-form'

export const handleFileChange = (
	e: React.ChangeEvent<HTMLInputElement>,
	setBase64: (str: string) => void,
	setValue: UseFormSetValue<{ change: string; avatar: string; id: number }>
) => {
	const file = e.target.files?.[0]

	if (file) {
		const reader = new FileReader()

		reader.onload = function (e) {
			const base64 = e?.target?.result
			if (base64) {
				setBase64(String(base64))
				setValue('avatar', String(base64))
			}
		}
		reader.readAsDataURL(file)
	} else {
		console.log('Error: No file selected')
	}
}
