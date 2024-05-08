import { BackendErrorsInterface } from "../shared/backendErrors.interface"
import { CurrentUserInterface } from "../shared/currentUser.interface"

export interface AuthStateInterface {
    isSubmitting: boolean
    currentUser: CurrentUserInterface | null | undefined
    isLoading: boolean
    validationErrors: BackendErrorsInterface | null
}