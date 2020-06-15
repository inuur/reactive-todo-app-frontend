import React from 'react';
import './Menu.css'

import MenuItem from './MenuItem/MenuItem'
import NewMenuField from "./NewMenuField/NewMenuField";

import tasksIcon from '../../icons/tasks.png'
import weekIcon from '../../icons/week.png'
import timersIcon from '../../icons/time.png'

class Menu extends React.Component {

    state = {
        title: 'Reactive To-Do list',
        userName: 'Айнур Гимадеев',
        userShortName: 'АГ',
        defaultMenu: [
            {title: 'Все задачи', icon: tasksIcon},
            {title: 'Неделя', icon: weekIcon},
            {title: 'Таймер', icon: timersIcon},
        ],
        userLists: [],
        addingNewItem: false
    }

    addList() {
        this.setState({addingNewItem: !this.state.addingNewItem});
    }

    render() {
        return (
            <div className='menu'>
                <div className="menu-title">
                    {this.state.title}
                </div>
                <div className="user">
                    <span className="dot">{this.state.userShortName}</span>
                    <span className="name">{this.state.userName}</span>
                    <hr/>
                    {this.state.defaultMenu.map((item) => {
                        return <MenuItem item={item} key={item.title}/>
                    })}
                    <hr/>
                    {this.state.userLists.map((item) => {
                        return <MenuItem item={item} key={item.title}/>
                    })}
                    {this.state.addingNewItem ? this.state.userLists.length === 0 ? <div><NewMenuField parent={this}/>
                        <hr/>
                    </div> : <NewMenuField parent={this}/> : null}
                    {this.state.userLists.length !== 0 ? <hr/> : null}
                    <button className='menu-btn' onClick={this.addList.bind(this)}>+ Добавить лист</button>
                </div>
            </div>
        )
    }
}

export default Menu;
