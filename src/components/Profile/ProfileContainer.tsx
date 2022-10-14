import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {ReduxStateType} from "../../Redux/Redux-Store";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data.items)
        });
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}



const mapStateToProps = (state: ReduxStateType) => {}

export default connect(mapStateToProps, {}) (ProfileContainer)