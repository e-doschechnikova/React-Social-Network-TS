import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SidebarReducer from "./SidebarReducer";
import UsersReducer from "./UsersReducer";

export type ReduxStateType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer
});
export const store = createStore(rootReducers)
