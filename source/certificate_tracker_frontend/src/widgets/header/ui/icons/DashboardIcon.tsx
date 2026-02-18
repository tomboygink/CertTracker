import { FC } from 'react'

interface DashboardIconProps {
	isActive: boolean
}

export const DashboardIcon: FC<DashboardIconProps> = ({ isActive }) => {
	return (
		<svg
			className={`w-[18px] h-[18px] ${isActive ? 'stroke-[#ffffff]' : 'stroke-[#7f7f7f]'}`}
			// stroke="#7f7f7f"
			fill="none"
			viewBox="0 0 18 18"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M2.813 4.5A1.687 1.687 0 0 1 4.5 2.812h1.688A1.687 1.687 0 0 1 7.875 4.5v1.688a1.687 1.687 0 0 1-1.688 1.687H4.5a1.687 1.687 0 0 1-1.688-1.688V4.5Zm0 7.313A1.687 1.687 0 0 1 4.5 10.124h1.688a1.687 1.687 0 0 1 1.687 1.688V13.5a1.687 1.687 0 0 1-1.688 1.688H4.5A1.687 1.687 0 0 1 2.812 13.5v-1.688ZM10.125 4.5a1.687 1.687 0 0 1 1.688-1.688H13.5A1.687 1.687 0 0 1 15.188 4.5v1.688A1.687 1.687 0 0 1 13.5 7.875h-1.688a1.687 1.687 0 0 1-1.687-1.688V4.5Zm0 7.313a1.687 1.687 0 0 1 1.688-1.688H13.5a1.687 1.687 0 0 1 1.688 1.688V13.5a1.687 1.687 0 0 1-1.688 1.688h-1.688a1.687 1.687 0 0 1-1.687-1.688v-1.688Z"
			/>
		</svg>
	)
}
