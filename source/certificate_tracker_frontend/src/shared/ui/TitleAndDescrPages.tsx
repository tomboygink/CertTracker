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
			<h1 className="font-bold text-[30px] text-[#202020] tracking-[-0.75%] leading-[36px]">
				{title}
			</h1>
			<p className="text-[16px] text-[#7f7f7f]">{descr}</p>
		</div>
	)
}
