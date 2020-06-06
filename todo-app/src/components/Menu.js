import React from 'react';
import '../css/Menu.css'

class Menu extends React.Component {

    state = {
        title: 'Reactive To-Do list',
        userName: 'Айнур Гимадеев',
        userShortName: 'АГ'
    }

    render() {
        return (
            <div className='menu'>
                <div className="title">
                    {this.state.title}
                </div>
                <div className="user">
                    <span className="dot">{this.state.userShortName}</span>
                    <span className="name">{this.state.userName}</span>
                    <hr/>
                    <button className='add-list-button'>+ Добавить лист</button>
                </div>
            </div>
        )
    }
}

export default Menu;
