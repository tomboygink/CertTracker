import { getAllCategoryCert, getAllCert } from '@/src/entities'
import { AddCertBtn, ExportDocsBtn } from '@/src/features'
import { TitleAndDescrPages } from '@/src/shared'
import { CertificateTable } from '@/src/widgets'

export const DocumentsContent = async () => {
	const certData = await getAllCert()
	const categoryesCertData = await getAllCategoryCert()
	return (
		<>
			<div className="flex items-center justify-between w-full mb-[24px]">
				<TitleAndDescrPages
					title="Реестр документов"
					descr="Управление и поиск по базе всех сертификатов компании"
				/>
				<div className="flex gap-[8px]">
					<ExportDocsBtn text="Экспорт" />
					<AddCertBtn text={'+ Новый документ'} />
				</div>
			</div>
			<CertificateTable
				certificates={certData?.data}
				categoryCert={categoryesCertData?.data}
			/>
		</>
	)
}
