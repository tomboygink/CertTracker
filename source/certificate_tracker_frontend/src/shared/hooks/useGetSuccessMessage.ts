'use client'

import { useEffect, useState } from "react"
import { useAppDispatch } from "../store"
import { closeModal } from "@/src/widgets"

export const useGetSuccessMessage = (isSuccess: boolean, message: string) => {
    const dispatch = useAppDispatch()
    const [ successMessage, setSuccessMessage ] = useState<string | null>(null)

    useEffect(() => {
        if(isSuccess) {
            setSuccessMessage(message)
            setTimeout(() => {
                setSuccessMessage(null)
                dispatch(closeModal())
            }, 2000)
        } else {
            setSuccessMessage(null)
        }
    }, [isSuccess])

    return successMessage
}