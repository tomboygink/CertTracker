import dynamic from 'next/dynamic'

export const AddCategoryCertModalLazy = dynamic(
	() => import('./AddCategoryCertModal'),
	{
		loading: () => <div>...Загрузка</div>
	}
)
