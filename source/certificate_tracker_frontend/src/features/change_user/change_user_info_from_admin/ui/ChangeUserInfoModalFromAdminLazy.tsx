import dynamic from 'next/dynamic'

export const ChangeUserInfoModalFromAdminLazy = dynamic(
	() => import('./ChangeUserInfoFromAdminModal'),
	{
		loading: () => <div>...Загрузка</div>
	}
)
