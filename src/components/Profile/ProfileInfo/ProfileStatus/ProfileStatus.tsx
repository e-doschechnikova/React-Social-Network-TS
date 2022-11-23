import React, {ChangeEvent} from "react";

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
                status: e.currentTarget.value
            }
        )
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}
                               value={this.state.status}
                               onBlur={this.deactivateEditMode}
                               autoFocus={true}/>
                    </div>}
            </div>
        );
    }
}

///----------- type -----------\\\
type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}