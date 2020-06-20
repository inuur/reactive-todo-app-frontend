import React from "react";
import Menu from '../Menu/Menu'
import List from '../List/List'
import './Todo.css'

class Todo extends React.Component {

    state = {
        component: <List/>
    }

    changeContent(component) {
        this.setState({component});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3 block">
                    <div className="menu-wrapper">
                        <div>
                            <Menu parent={this}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 block" >
                    <div className="list-wrapper">
                        <div>
                            {this.state.component}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;