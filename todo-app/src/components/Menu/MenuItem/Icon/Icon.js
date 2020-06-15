import React from "react";
import './Icon.css'
import Default from '../../../../icons/default.png'


class Icon extends React.Component {

    clicked() {
        console.log("Icon clicked");
    }

    render() {
        return (
            this.props.item && this.props.item.icon !== ""
                ?
                <img src={this.props.item.icon} className="icon" onClick={this.clicked.bind(this, this.props.item.icon)}
                     alt=""/>
                :
                this.props.icon
                    ?
                    <img src={this.props.icon} className="icon" onClick={this.clicked.bind(this)} alt=""/>
                    :
                    <img src={Default} className="icon" onClick={this.clicked.bind(this)} alt=""/>
        )
    }
}

export default Icon;