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
		<div className="flex flex-col gap-[16px] w-full h-[486px] p-[24px] bg-white rounded-[12px] border-1 border-[#E0DFDF] shadow-md">
			<div className="flex flex-col gap-[8px] w-full">
				<h2 className="text-[16px] text-[#202020] font-semibold leading-[16px]">
					{title}
				</h2>
				<p className="text-[14px] text-[#7f7f7f] leading-[20px]">{descr}</p>
			</div>
			<div className="w-full h-full border-1 border-dashed border-gray-300 rounded-[12px]">
				{children}
			</div>
		</div>
	)
}
