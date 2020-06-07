import React from 'react';
import '../css/Menu.css'

class List extends React.Component {

    state = {
        title: 'List title'
    }

    render() {
        return (
            <p>{this.state.title}</p>
        )
    }
}

export default List;
