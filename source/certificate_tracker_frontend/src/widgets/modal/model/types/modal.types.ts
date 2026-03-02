export type ModalType = 'addCert' | 'changeCert' | null

export type Modal = {
	payload?: any
	type: ModalType
}
