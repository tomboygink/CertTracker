import { TitleAndDescrPages } from '@/src/shared'
import { SettingsContainer } from '@/src/widgets'

export const SettingsContent = () => {
	return (
		<>
			<div className="mb-[32px]">
				<TitleAndDescrPages
					title="Настройки"
					descr="Управление данными пользователей и категорий."
				/>
			</div>
			<SettingsContainer />
		</>
	)
}
