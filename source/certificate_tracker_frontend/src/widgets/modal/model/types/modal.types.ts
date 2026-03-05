export type ModalType =
	| 'addCert'
	| 'changeCert'
	| 'changeUserInfoAdmin'
	| 'addUser'
	| 'changeUserInfoForUser'
	| 'changeUserPassAdmin'
	| null

export type Modal = {
	payload?: any
	type: ModalType
}
