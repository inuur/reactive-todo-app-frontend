import React from "react";
import './NewMenuField.css'
import Icon from "../MenuItem/Icon/Icon";
import AddIcon from '../../../icons/addItem.png'

class NewMenuField extends React.Component {

    state = {
        newListName: ''
    }

    changed(event) {
        this.setState({newListName: event.target.value})
    }

    added() {
        const userLists = this.props.parent.state.userLists.concat()
        userLists.push({title: this.state.newListName, icon: ''})
        this.props.parent.setState({userLists, addingNewItem: !this.props.parent.state.addingNewItem})
    }

    render() {
        return (
            <div className="input-field-wrapper">
                <Icon />
                <input type="text" onChange={this.changed.bind(this)}/>
                <button onClick={this.added.bind(this)}><Icon icon={AddIcon}/></button>
            </div>
        )
    }
}

export default NewMenuField;