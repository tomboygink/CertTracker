'use client'

import ApexCharts from 'apexcharts'
import React from 'react'
import Chart from 'react-apexcharts'

interface SplineChartProps {
	data: { label: string; count: number }[]
	title?: string
	height?: number
}

export const SplineChart: React.FC<SplineChartProps> = ({
	data
	// height = 300
}) => {
	const series = [
		{
			name: 'Кол-во',
			data: data.map(point => point.count)
		}
	]

	const options: ApexCharts.ApexOptions = {
		chart: {
			id: 'spline-chart',
			type: 'area',
			toolbar: { show: false }
		},
		xaxis: {
			categories: data.map(point => point.label)
		},
		stroke: {
			curve: 'smooth'
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.2
			},
			colors: ['#7a30fb']
		},
		tooltip: {
			enabled: true
		},
		subtitle: {
			style: {
				fontFamily: 'Inter'
			}
		}
	}

	return <Chart options={options} series={series} type="area" height={'100%'} />
}
