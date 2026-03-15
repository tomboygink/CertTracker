export function base64ToFile(base64?: string, filename = 'document.pdf') {
	if (!base64) return null

	const arr = base64.split(',')

	let mime = 'application/pdf'
	let data = base64

	if (arr.length > 1) {
		const match = arr[0].match(/:(.*?);/)
		if (match) mime = match[1]
		data = arr[1]
	}

	const bstr = atob(data)
	let n = bstr.length
	const u8arr = new Uint8Array(n)

	while (n--) {
		u8arr[n] = bstr.charCodeAt(n)
	}

	return new File([u8arr], filename, { type: mime })
}
