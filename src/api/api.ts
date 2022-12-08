import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "ce3b32cf-97cc-432e-ab93-6dfda4bfd63f"
    }

})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    unfollowUser(id: number) {
        return instance.post(`follow/${id}`, {},)
            .then(response => response.data)
    },
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`,)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

///----------- type -----------\\\
export type ResponseType<T = {}> = {
    data: T
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}
