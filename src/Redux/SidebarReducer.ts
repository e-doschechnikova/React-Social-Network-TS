import {ActionsTypes, SidebarFriendsStateType} from "./Store";
import {v1} from "uuid";

const initialState: SidebarFriendsStateType = {
    sidebarForFriends: [
        {

            id: v1(),
            name: "Lama Iliya",
            avatar:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eTHoHEyBCjd-p5MA-pUIvItDoaKI7e-A5KsHZrC715mj_B3YtZPF2Cw26mpv2Xzijqk&usqp=CAU",
        },
        {
            id: v1(),
            name: "Lama Papa",
            avatar:
                "https://i.pinimg.com/474x/db/0a/15/db0a1537246c4867dd7a312fe23bea12.jpg",
        },
        {
            id: v1(),
            name: "Lama Ira",
            avatar:
                "https://i.pinimg.com/736x/fa/7d/6c/fa7d6cf13f3dd106d6d1af501aecb1d8.jpg",
        },
    ],
}

const SidebarReducer = (state: SidebarFriendsStateType = initialState, action: ActionsTypes) => {
    return state;
};

export default SidebarReducer;
