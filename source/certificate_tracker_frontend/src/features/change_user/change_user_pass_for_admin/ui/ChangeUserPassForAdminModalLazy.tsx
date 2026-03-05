import dynamic from 'next/dynamic'

export const ChangeUserPassForAdminModalLazy = dynamic(
	() => import('./ChangeUserPassForAdminModal'),
	{
		loading: () => <div>...Загрузка</div>
	}
)
