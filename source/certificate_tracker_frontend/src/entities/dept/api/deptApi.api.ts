import { apiPreparedBody, baseApi, bookKeys, ECommand } from '@/src/shared'

export const deptApi = baseApi.injectEndpoints({
	endpoints: build => ({
		addDept: build.mutation({
			query: args => apiPreparedBody(ECommand.addDept, args),
			invalidatesTags: bookKeys.dept
		}),
		changeDept: build.mutation({
			query: args => apiPreparedBody(ECommand.changeDept, args),
			invalidatesTags: bookKeys.dept
		}),
		allDept: build.query({
			query: args => apiPreparedBody(ECommand.allDept, args),
			providesTags: bookKeys.dept
		})
	})
})

export const { useAddDeptMutation, useAllDeptQuery, useChangeDeptMutation } =
	deptApi
