// Legacy shape (snake_case) kept for reference:
// export type Cert = {
// 	id: string
// 	user_id: string
// 	certname: string
// 	certnumber: string
// 	statuscert_id: string
// 	category_id: string
// 	issuedate: string
// 	certvalidityperiod: string
// 	hasDocs?: boolean
// }

export type CertId = string
export type UserId = string
export type CertStatusId = string
export type CategoryId = string

export type ISODateString = string

export type Cert = {
	id: CertId
	userId: UserId
	name: string
	number: string
	statusId: CertStatusId
	categoryId: CategoryId
	issueDate: ISODateString
	validityPeriod: string
	hasDocs?: boolean
}
