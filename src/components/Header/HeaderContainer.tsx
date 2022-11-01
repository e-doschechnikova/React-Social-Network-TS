import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC} from "../../Redux/auth-reducer";
import {ReduxStateType} from "../../Redux/Redux-Store";


type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

type MapDispatchToPropsType = {
    getAuthUserDataTC: () => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component <HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer)