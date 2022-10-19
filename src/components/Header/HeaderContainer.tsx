import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../Redux/auth-reducer";
import {ReduxStateType} from "../../Redux/Redux-Store";

type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

type MapDispatchToPropsType = {
    setAuthUserDataAC: (id: number, email: string, login: string) => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component <HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserDataAC(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)