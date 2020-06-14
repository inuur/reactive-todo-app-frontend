import React from "react";
import './MenuItem.css'

import Icon from './Icon/Icon'

class MenuItem extends React.Component {

    onMenuItemClick(title) {
        console.log(title);
    }

    render() {
        return (
            <p>
                <Icon item={this.props.item}/>
                <button className="menu-btn"
                        onClick={this.onMenuItemClick.bind(this, this.props.item.title)}>
                    {this.props.item.title}
                </button>
            </p>
        )
    }
}

export default MenuItem;