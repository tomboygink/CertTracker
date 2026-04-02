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

		const responseData =
			(response as { data?: unknown } | undefined)?.data ?? null
		const payload =
			(responseData as { data?: unknown } | null)?.data ??
			responseData ??
			null
		const payloadItem = Array.isArray(payload) ? payload[0] : payload

		const resolveFileByField = (
			data: Record<string, unknown> | null,
			currentField: FileField
		) => {
			if (!data) return null

			if (currentField === 'docs_cert') {
				return data.docs_cert ?? data.doc_cert ?? data.docs ?? null
			}

			return data.docs_prot ?? data.doc_prot ?? data.protocol ?? null
		}

		const base64Srt = resolveFileByField(
			(payloadItem as Record<string, unknown> | null) ?? null,
			field
		)

		// ПРОВЕРКА: если данных нет, просто выходим
		if (base64Srt == null || String(base64Srt).trim().toLowerCase() === 'null') {
			alert(notAttachedMessage)
			return
		}

		let cleanBase64 = String(base64Srt)
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
		alert('Произошла ошибка при загрузке')
	}
}
