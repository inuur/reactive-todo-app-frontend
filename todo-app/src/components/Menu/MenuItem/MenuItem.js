import React from "react";
import './MenuItem.css'
import Timer from '../../Timer/Timer'

import Icon from './Icon/Icon'
import Todo from "../../Todo/Todo";

class MenuItem extends React.Component {

    onMenuItemClick(title) {
    }

    render() {
        return (
            <div className="menu-item">
                <Icon item={this.props.item}/>
                <button className="menu-btn"
                        onClick={() => {this.props.parent.setState({component: <Timer/>})}}>
                    {this.props.item.title}
                </button>
            </div>
        )
    }
}

export default MenuItem;