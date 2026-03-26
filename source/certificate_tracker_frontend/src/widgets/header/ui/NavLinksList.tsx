'use client'

import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '../config/NAV_LINKS.config'
import { NavLinksItem } from './NavLinkItem'
import { FC } from 'react'

interface NavLinksListProps {
	handleNavLinkClick?: () => void
}

export const NavLinksList: FC<NavLinksListProps> = ({ handleNavLinkClick }) => {
	const pathname = usePathname()

	return (
		<ul className="flex flex-col gap-[8px] w-full">
			{NAV_LINKS.map(item => (
				<li key={item.link}>
					<NavLinksItem
						link={item}
						isActive={pathname === item.link}
						handleNavLinkClick={handleNavLinkClick}
					/>
				</li>
			))}
		</ul>
	)
}
