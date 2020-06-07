import React from 'react';
import '../css/Menu.css'

function Item(props) {
    return (
        <p>
            <img src={props.item.icon} className="icon" alt="icon"/>
            <button className="menu-btn" onClick={(item) => props.onMenuItemClick('Test')}>{props.item.title}</button>
        </p>
    )
}

class Menu extends React.Component {

    state = {
        title: 'Reactive To-Do list',
        userName: 'Айнур Гимадеев',
        userShortName: 'АГ',
        defaultMenu: [
            {title: 'Все задачи', icon: 'https://image.flaticon.com/icons/svg/839/839746.svg'},
            {title: 'Неделя', icon: 'https://image.flaticon.com/icons/png/512/2934/2934065.png'},
            {title: 'Таймер', icon: 'https://image.flaticon.com/icons/svg/3003/3003126.svg'},
        ]
    }

    onMenuItemClick = (item) => {
        console.log(item)
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
                    {this.state.defaultMenu.map((item) => {
                        return <Item item={item}/>
                    })}
                    <hr/>
                    <button className='menu-btn'>+ Добавить лист</button>
                </div>
            </div>
        )
    }
}

export default Menu;
