import { HOME_SERT_STATISTIC } from '../config/HOME_CERT_STATISTIC.config'
import { HomeCertStatsItem } from './HomeCertStatsItem'

export const HomeCertStatsList = () => {
	return (
		<ul className="grid grid-cols-4 gap-[24px]">
			{HOME_SERT_STATISTIC.map(item => (
				<li
					key={item.key}
					className="px-[24px] py-[48px] rounded-[12px] border-1 border-[#E0DFDF] shadow-md"
				>
					<HomeCertStatsItem
						descr={item.descr}
						title={item.title}
						icon={item.icon}
						bgColor={item.bgColor}
						value={item.value}
					/>
				</li>
			))}
		</ul>
	)
}
