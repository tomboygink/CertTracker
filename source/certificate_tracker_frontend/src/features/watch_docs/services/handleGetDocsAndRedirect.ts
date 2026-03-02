import { Cert, useLazyCertDocsQuery } from '@/src/entities'

type GetDocsTrigger = ReturnType<typeof useLazyCertDocsQuery>[0]

interface Props {
	getDocs: GetDocsTrigger
	cert: Cert
	handleClose: () => void
}

export const handleGetDocsAndRedirect = ({
	getDocs,
	cert,
	handleClose
}: Props) => {
	getDocs({ id: cert?.id }).then(response => {
		// 1. Берем строку
		let base64Srt = response?.data?.data?.[0]?.docs

		if (!base64Srt) return

		// 2. ОТРЕЗАЕМ заголовок "data:...;base64,"
		if (base64Srt.includes(',')) {
			base64Srt = base64Srt.split(',')[1]
		}

		// 3. На всякий случай чистим от пробелов/переносов
		base64Srt = base64Srt.trim()

		try {
			const binaryString = window.atob(base64Srt)
			const len = binaryString.length
			const bytes = new Uint8Array(len)
			for (let i = 0; i < len; i++) {
				bytes[i] = binaryString.charCodeAt(i)
			}
			const blob = new Blob([bytes], { type: 'application/pdf' })
			const url = URL.createObjectURL(blob)

			window.open(url, '_blank')
			handleClose()
		} catch (e) {
			console.error(e)
		}
	})
}
