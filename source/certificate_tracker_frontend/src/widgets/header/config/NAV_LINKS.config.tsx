import { PAGES } from '@/src/shared'
import { NavLink } from '../types/navLink.types'
import { AnaliticsIcon } from '../ui/icons/AnaliticsIcon'
import { DashboardIcon } from '../ui/icons/DashboardIcon'
import { DocumentsIcon } from '../ui/icons/DocumentsIcon'
import { SettingsIcon } from '../ui/icons/SettingsIcon'

export const NAV_LINKS: NavLink[] = [
	{
		text: 'Дашборд',
		link: PAGES.HOME,
		icon: DashboardIcon
	},
	{
		text: 'Реестр документов',
		link: PAGES.DOCUMENTS,
		icon: DocumentsIcon
	},
	{
		text: 'Отчеты',
		link: PAGES.ANALITICS,
		icon: AnaliticsIcon
	},
	{
		text: 'Настройки',
		link: PAGES.SETTINGS,
		icon: SettingsIcon
	}
]
