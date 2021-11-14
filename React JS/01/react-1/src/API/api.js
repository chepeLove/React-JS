import * as axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"ec9391ba-e5e9-485e-89d3-e761bb3874c6"
    }
})

export const usersAPI = {
    getUsers(currentPage=1,pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}

// export const unfollowAPI ={
//     getUnfollow(id){
//         return instance.delete(`follow/${id}`)
//             .then(response => {
//                 if (response.data.resultCode === 0){
//                     unfollow(id)
//                 }
//             })
// }
// }
