'use client'

import { FC } from 'react'
import Chart from 'react-apexcharts'
import colors from '../../../../../../config/colors.json'

interface DonutChartProps {
	data: { deptName: string; count: number }[]
}

export const DonutChart: FC<DonutChartProps> = ({
	data
	// height = 300
}) => {
	const MAX_LABEL_LENGTH = 20
	const truncateLabel = (label: string) => {
		return label.length > MAX_LABEL_LENGTH
			? `${label.slice(0, MAX_LABEL_LENGTH)}...`
			: label
	}

	const series = data.map(item => item.count)
	const labels = data.map(item => item.deptName)
	const chartColors = data.map(
		(item, index) => colors.colors.color[index % colors.colors.color.length]
	)

	const options: ApexCharts.ApexOptions = {
		chart: {
			id: 'donut-chart',
			type: 'donut',
			toolbar: { show: false }
		},
		series,
		labels,
		colors: chartColors,
		legend: {
			formatter: seriesName => truncateLabel(seriesName)
		},
		tooltip: {
			enabled: true,
			custom: ({ series, seriesIndex, w }) => {
				const originalLabel = String(w?.globals?.labels?.[seriesIndex] ?? '')
				const safeLabel = truncateLabel(originalLabel)
				const safeValue = String(series?.[seriesIndex] ?? 0)
				const markerColor = String(
					w?.globals?.colors?.[seriesIndex] ?? '#7f7f7f'
				)

				return `<div style="padding:8px 10px;font-size:12px;line-height:1.3;display:flex;align-items:center;gap:8px;">
					<span style="width:10px;height:10px;border-radius:50%;background:${markerColor};display:inline-block;"></span>
					<span>${safeLabel}: ${safeValue}</span>
				</div>`
			}
		},
		subtitle: {
			style: {
				fontFamily: 'Inter'
			}
		},
		plotOptions: {
			pie: {
				donut: {
					size: '50%',
					labels: {
						show: false,
						name: {
							show: true,
							fontSize: '12px'
						},
						value: {
							show: true
						},
						total: {
							show: false,
							label: 'Всего',
							formatter: () => String(series.reduce((a, b) => a + b, 0))
						}
					}
				}
			}
		},
		responsive: [
			{
				breakpoint: 1024,
				options: {
					plotOptions: {
						pie: {
							donut: {
								size: '50%'
							},
							name: {
								show: true,
								fontSize: '9px'
							},
							value: {
								show: true,
								fontSize: '9px'
							},
							total: {
								show: false
							}
						}
					}
				}
			},
			{
				breakpoint: 1536,
				options: {
					plotOptions: {
						pie: {
							donut: {
								size: '50%',
								name: {
									show: true,
									fontSize: '12px'
								},
								value: {
									show: true,
									fontSize: '12px'
								},
								total: {
									show: true,
									label: 'Всего',
									formatter: () => String(series.reduce((a, b) => a + b, 0))
								}
							}
						}
					}
				}
			},
			{
				breakpoint: 1920,
				options: {
					plotOptions: {
						pie: {
							donut: {
								size: '50%'
							}
						},
						name: {
							show: true,
							fontSize: '12px'
						},
						value: {
							show: true,
							fontSize: '12px'
						},
						total: {
							show: true,
							label: 'Всего',
							formatter: () => String(series.reduce((a, b) => a + b, 0))
						}
					}
				}
			}
		]
	}

	return (
		<Chart
			options={options}
			series={options.series}
			type="donut"
			height={'100%'}
		/>
	)
}
