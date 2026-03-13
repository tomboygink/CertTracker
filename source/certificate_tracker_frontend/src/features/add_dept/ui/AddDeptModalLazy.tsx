import dynamic from 'next/dynamic'

export const AddDeptModalLazy = dynamic(() => import('./AddDeptModal'), {
	loading: () => <div>...Загрузка</div>
})
