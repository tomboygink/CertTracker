import dynamic from 'next/dynamic'

export const ChangeUserPassForAUserLazy = dynamic(
	() => import('./ChangeUserPassForAUser'),
	{
		loading: () => <div>...Загрузка</div>
	}
)
