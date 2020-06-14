import React from "react";
import './ListItem.css'

class ListItem extends React.Component {

    render() {
        return (
            <li>
                <div className="check-box-wrapper">
                    <div className="checkbox-inner">
                        <input type="checkbox"/>
                    </div>
                </div>
                {this.props.item.task}
            </li>
        )
    }
}

export default ListItem;