import React from "react";
import './Icon.css'


class Icon extends React.Component {

    clicked() {
        console.log("Icon clicked");
    }

    render() {
        return (
            <img src={this.props.item.icon} className="icon" onClick={this.clicked.bind(this, this.props.item.icon)}/>
        )
    }

}

export default Icon;