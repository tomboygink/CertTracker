export type ModalType =
	| 'addCert'
	| 'changeCert'
	| 'changeUserInfoAdmin'
	| 'addUser'
	| null

export type Modal = {
	payload?: any
	type: ModalType
}
