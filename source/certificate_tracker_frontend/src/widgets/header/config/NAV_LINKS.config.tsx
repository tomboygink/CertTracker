import { NavLink } from '../types/navLink.types'
import { AnaliticsIcon } from '../ui/icons/AnaliticsIcon'
import { DashboardIcon } from '../ui/icons/DashboardIcon'
import { DocumentsIcon } from '../ui/icons/DocumentsIcon'
import { SettingsIcon } from '../ui/icons/SettingsIcon'

export const NAV_LINKS: NavLink[] = [
	{
		text: 'Дашборд',
		link: '/',
		icon: DashboardIcon
	},
	{
		text: 'Реестр документов',
		link: '/documents',
		icon: DocumentsIcon
	},
	{
		text: 'Отчеты',
		link: '/analitics',
		icon: AnaliticsIcon
	},
	{
		text: 'Настройки',
		link: '/settings',
		icon: SettingsIcon
	}
]
