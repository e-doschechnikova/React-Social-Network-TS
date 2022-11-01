import axios from "axios";
import exp from "constants";

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
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`,)
    }
}

