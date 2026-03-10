export type ModalType =
	| 'addCert'
	| 'changeCert'
	| 'changeUserInfoAdmin'
	| 'addUser'
	| 'changeUserInfoForUser'
	| 'changeUserPassAdmin'
	| 'changeUserPassUser'
	| null

export type Modal = {
	payload?: any
	type: ModalType
}
