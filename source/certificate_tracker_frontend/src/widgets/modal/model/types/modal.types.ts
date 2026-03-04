export type ModalType = 'addCert' | 'changeCert' | 'changeUserInfoAdmin' | null

export type Modal = {
	payload?: any
	type: ModalType
}
