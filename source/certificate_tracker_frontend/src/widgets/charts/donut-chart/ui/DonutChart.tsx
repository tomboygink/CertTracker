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
		tooltip: { enabled: true },
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
