import { FormBtn, FormInput } from '@/src/shared'

export default function ChangeUserPassForAUser() {
	return (
		<form
			// onSubmit={handleSubmit(handleChangeUserInfoForUserSubmit)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">Изменить пароль</h2>
			<FormInput
				type="password"
				placeholder="Новый пароль"
				label="Новый пароль"
				// {...register('lastname')}
				// errorMessage={errors.lastname?.message}
			/>
			{/* {successMessage && (
                        <span className="text-[14px] font-light text-green-400">
                            {successMessage}
                        </span>
                    )} */}
			<FormBtn type="submit" text="Применить изменения" />
		</form>
	)
}
