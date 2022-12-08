import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import SidebarReducer from "./sidebar-reducer";
import UsersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";

export type ReduxStateType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer
});
export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxStateType, unknown, AnyAction>
//@ts-ignore
window.store = store;