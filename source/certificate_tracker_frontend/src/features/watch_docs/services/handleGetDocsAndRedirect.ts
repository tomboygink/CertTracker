import { Cert, useLazyCertDocsQuery } from '@/src/entities'

type GetDocsTrigger = ReturnType<typeof useLazyCertDocsQuery>[0]
type FileField = 'docs_cert' | 'docs_prot'

interface Props {
	getDocs: GetDocsTrigger
	cert: Cert
	handleClose: () => void
	field?: FileField
	notAttachedMessage?: string
}

export const handleGetDocsAndRedirect = async ({
	getDocs,
	cert,
	handleClose,
	field = 'docs_cert',
	notAttachedMessage = 'Документ не прикреплен'
}: Props) => {
	try {
		const response = await getDocs({ id: cert?.id })

		const base64Srt = response?.data?.data?.[0]?.[field]

		console.log('BASE64 В КОНСОЛИ:', base64Srt)

		// ПРОВЕРКА: если данных нет, просто выходим
		if (!base64Srt || base64Srt === 'null') {
			alert(notAttachedMessage)
			return
		}

		let cleanBase64 = base64Srt
		if (cleanBase64.includes(',')) {
			cleanBase64 = cleanBase64.split(',')[1]
		}

		cleanBase64 = cleanBase64.trim()

		if (!cleanBase64) {
			alert('Файл пуст')
			return
		}

		// Декодируем
		const binaryString = window.atob(cleanBase64)
		const bytes = new Uint8Array(binaryString.length)
		for (let i = 0; i < binaryString.length; i++) {
			bytes[i] = binaryString.charCodeAt(i)
		}

		const blob = new Blob([bytes], { type: 'application/pdf' })
		const url = URL.createObjectURL(blob)

		// Только если мы дошли до сюда и ошибок нет — открываем
		window.open(url, '_blank')
		handleClose()
	} catch (e) {
		console.error('Ошибка в handleGetDocsAndRedirect:', e)
		alert('Произошла ошибка при загрузке')
	}
}
