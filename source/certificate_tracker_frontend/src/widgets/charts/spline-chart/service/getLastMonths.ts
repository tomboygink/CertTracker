export const getLastMonths = (n: number) => {
	const months = []
	const now = new Date()

	for (let i = n - 1; i >= 0; i--) {
		const d = new Date(now.getFullYear(), now.getMonth() - i, 1) // первый день месяца
		const monthLabel = d.toLocaleString('default', {
			month: 'short',
			year: 'numeric'
		})
		months.push({ date: d, label: monthLabel })
	}

	return months
}
