import Link from 'next/link'
import { NavLink } from '../types/navLink.types'
import { FC } from 'react'

interface NavLinksItemProps {
	link: NavLink
	isActive: boolean
}

export const NavLinksItem: FC<NavLinksItemProps> = ({ link, isActive }) => {
	const Icon = link.icon

	return (
		<Link
			className={`block flex items-center gap-[12px] w-full py-[12px] px-[16px] rounded-[8px] ${isActive ? 'bg-[#8848f9]' : ''} ${isActive ? 'shadow-[0_3px_3px_rgba(0,0,0,0.1)]' : ''}`}
			href={link.link}
		>
			<div>
				<Icon isActive={isActive} />
			</div>
			<span
				className={`font-medium text-[14px] ${isActive ? 'text-white' : 'text-[#7f7f7f]'}`}
			>
				{link.text}
			</span>
		</Link>
	)
}
