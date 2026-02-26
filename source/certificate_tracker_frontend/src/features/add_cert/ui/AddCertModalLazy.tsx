import dynamic from 'next/dynamic'

export const AddCertModalLazy = dynamic(() => import('./AddCertModal'), {
	loading: () => <div>...Загрузка</div>
})
