import { FC } from 'react'

interface TitleAndDescrPagesProps {
	title: string
	descr: string
}

export const TitleAndDescrPages: FC<TitleAndDescrPagesProps> = ({
	title,
	descr
}) => {
	return (
		<div>
			<h1 className="font-bold text-[16px] text-[#202020] tracking-[-0.75%] leading-[36px] sm:text-[16px] md:text-[16px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px]">
				{title}
			</h1>
			<p className="text-[12px] text-[#7f7f7f] sm:text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px]">
				{descr}
			</p>
		</div>
	)
}
