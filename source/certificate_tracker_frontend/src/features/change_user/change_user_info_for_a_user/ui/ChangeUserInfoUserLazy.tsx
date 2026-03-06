import dynamic from 'next/dynamic'

export const ChangeUserInfoUserLazy = dynamic(
	() => import('./ChangeUserInfoUser'),
	{
		loading: () => <div>...Загрузка</div>
	}
)
