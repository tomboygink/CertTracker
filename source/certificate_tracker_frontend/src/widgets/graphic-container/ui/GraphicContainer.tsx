import { FC } from 'react'

interface GraphicContainerProps {
	title: string
	descr: string
	children: React.ReactNode
}

export const GraphicContainer: FC<GraphicContainerProps> = ({
	title,
	descr,
	children
}) => {
	return (
		<div className="flex flex-col gap-4 w-full min-h-[360px] p-4 sm:p-6 bg-white rounded-[12px] border border-[#E0DFDF] shadow-md">
			<div className="flex flex-col gap-2 w-full">
				<h2 className="text-base sm:text-[16px] text-[#202020] font-semibold leading-5">
					{title}
				</h2>
				<p className="text-sm sm:text-[14px] text-[#7f7f7f] leading-5">{descr}</p>
			</div>
			<div className="w-full flex-1 min-h-[240px] sm:min-h-[280px] border border-dashed border-gray-300 rounded-[12px]">
				{children}
			</div>
		</div>
	)
}
