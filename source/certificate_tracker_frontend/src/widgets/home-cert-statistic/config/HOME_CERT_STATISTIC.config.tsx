import { HomeCertStatistic } from '../types/homeCertStatistic.types'

export const HOME_SERT_STATISTIC: HomeCertStatistic[] = [
	{
		key: 'total',
		bgColor: '#dbeafe',
		title: 'Всего сертификатов',
		descr: 'Общее количество в реестре',
		icon: '/shield.svg',
		value: '1,248'
	},
	{
		key: 'active',
		bgColor: '#dcfce7',
		title: 'Активные',
		descr: 'Действительны более 30 дней',
		icon: '/calendar_stats.svg',
		value: '1,180'
	},
	{
		key: 'expiring',
		bgColor: '#fef9c2',
		title: 'Истекают скоро',
		descr: 'Заканчиваются в течение 30 дней',
		icon: '/errror.svg',
		value: '42'
	},
	{
		key: 'expired',
		bgColor: '#ffe2e2',
		title: 'Просроченные',
		descr: 'Требуют немедленного внимания',
		icon: '/close.svg',
		value: '26'
	}
]
