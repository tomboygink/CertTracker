export type ModalType =
	| 'addCert'
	| 'changeCert'
	| 'changeUserInfoAdmin'
	| 'addUser'
	| 'changeUserInfoForUser'
	| 'changeUserPassAdmin'
	| 'changeUserPassUser'
	| 'settingUserAvatar'
	| 'addCategory'
	| 'changeCategory'
	| null

export type Modal = {
	payload?: any
	type: ModalType
}
