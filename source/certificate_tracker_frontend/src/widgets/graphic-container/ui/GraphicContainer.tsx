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
		<div className="flex min-h-[260px] w-full flex-col gap-3 rounded-[12px] border border-[#E0DFDF] bg-white p-4 shadow-md sm:min-h-[300px] sm:gap-4 sm:p-6 lg:min-h-[340px]">
			<div className="flex w-full flex-col sm:gap-2 md:gap-2 lg:gap-4 xl:gap-4 2xl:gap-4">
				<h2 className="text-sm font-semibold leading-5 text-[#202020] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]">
					{title}
				</h2>
				<p className="text-xs leading-5 text-[#7f7f7f] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px]">
					{descr}
				</p>
			</div>
			<div className="min-h-[200px] w-full flex-1 rounded-[12px] border border-dashed border-gray-300 sm:min-h-[240px] lg:min-h-[260px]">
				{children}
			</div>
		</div>
	)
}
