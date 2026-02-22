import { apiPreparedBody, baseApi, bookKeys, ECommand } from '@/src/shared'

export const certificateApi = baseApi.injectEndpoints({
	endpoints: build => ({
		addCert: build.mutation({
			query: args => apiPreparedBody(ECommand.addCert, args),
			invalidatesTags: bookKeys.certificate
		}),
		changeCert: build.mutation({
			query: args => apiPreparedBody(ECommand.changeCert, args),
			invalidatesTags: bookKeys.certificate
		}),
		archiveCert: build.mutation({
			query: args => apiPreparedBody(ECommand.archiveCert, args),
			invalidatesTags: bookKeys.certificate
		}),
		allCert: build.query({
			query: args => apiPreparedBody(ECommand.allCert, args),
			providesTags: bookKeys.certificate
		})
	})
})

export const {
	useAddCertMutation,
	useAllCertQuery,
	useArchiveCertMutation,
	useChangeCertMutation
} = certificateApi
