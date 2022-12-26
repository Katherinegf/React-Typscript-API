export type User = {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface UserRequest {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface UserProviderProps {
    children: any
}