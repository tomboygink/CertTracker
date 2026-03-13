import dynamic from 'next/dynamic'

export const SettingUserAvatarModalLazy = dynamic(
	() => import('./SettingUserAvatarModal'),
	{
		loading: () => <div>...Загрузка</div>
	}
)
