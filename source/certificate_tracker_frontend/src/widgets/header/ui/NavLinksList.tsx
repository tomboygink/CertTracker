'use client'

import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '../config/NAV_LINKS.config'
import { NavLinksItem } from './NavLinkItem'

export const NavLinksList = () => {
	const pathname = usePathname()

	return (
		<ul className="flex flex-col gap-[8px] w-full">
			{NAV_LINKS.map(item => (
				<li key={item.link}>
					<NavLinksItem link={item} isActive={pathname === item.link} />
				</li>
			))}
		</ul>
	)
}
