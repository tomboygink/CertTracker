import { FC } from 'react'

interface ListSearchItemInfoProps {
	label: string
	text: string
}

export const ListSearchItemInfo: FC<ListSearchItemInfoProps> = ({
	label,
	text
}) => {
	return (
		<td className="block xl:table-cell py-1 xl:py-3 w-full xl:w-auto align-middle">
			<div className="flex flex-row justify-between items-center xl:flex-col xl:items-start gap-[4px] w-full xl:w-auto">
				<span className="text-[12px] text-[#7f7f7f] shrink-0">{label}</span>
				<p className="text-[14px] text-[#202020] font-medium break-words text-right xl:text-left min-w-0">{text}</p>
			</div>
		</td>
	)
}
