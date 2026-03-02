'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { changeCertSchema } from '../validation/changeCertSchema'
import { ChangeCertFormValues } from '../types/changeCertFormValues.types'
import { useAppSelector } from '@/src/shared'
import moment from 'moment'

export const useChangeCertForm = () => {
	const { user, selectCert } = useAppSelector(state => ({
		user: state.user.user,
		selectCert: state.selectCert.selectCert
	}))

	const form = useForm<ChangeCertFormValues>({
		resolver: zodResolver(changeCertSchema),
		defaultValues: {
			user_id: Number(user?.id),
			id: Number(selectCert?.id),
			certname: selectCert?.certname ?? '',
			certnumber: selectCert?.certnumber ?? '',
			category_id: Number(selectCert?.category_id),
			issuedate: moment(selectCert?.issuedate).format('YYYY-MM-DD'),
			certvalidityperiod: moment(selectCert?.certvalidityperiod).format(
				'YYYY-MM-DD'
			)
		}
	})
	return form
}
