import { getAllCategoryCert, getAllCert } from '@/src/entities'
import { CertificateTable } from '@/src/widgets'
import { DocumentHeader } from './DocumentHeader'

export const DocumentsContent = async () => {
	const certData = await getAllCert()
	const categoryesCertData = await getAllCategoryCert()
	return (
		<>
			<DocumentHeader />
			<CertificateTable
				certificates={certData?.data}
				categoryCert={categoryesCertData?.data}
			/>
		</>
	)
}
