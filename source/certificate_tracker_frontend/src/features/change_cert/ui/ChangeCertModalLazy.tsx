import dynamic from 'next/dynamic'

export const ChangeCertModalLazy = dynamic(() => import('./ChangeCertModal'), {
	loading: () => <div>...Загрузка</div>
})
