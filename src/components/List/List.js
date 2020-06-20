import React from 'react';
import ListItem from './ListItem/ListItem'
import './List.css'

class List extends React.Component {

    state = {
        title: 'Все задачи',
        items: [
            {task: 'todo 1', date: null},
            {task: 'todo 2', date: null},
            {task: 'todo 3', date: null},
            {task: 'todo 1', date: null},
            {task: 'todo 2', date: null},
            {task: 'todo 3', date: null},
            {task: 'todo 1', date: null},
            {task: 'todo 2', date: null},
            {task: 'todo 3', date: null},
        ]
    }

    render() {
        return (
            <div>
                <div className="list-title-wrapper"><span className="list-title">{this.state.title}</span></div>
                <ul className="list">
                    {this.state.items.map((item) => {
                            return <ListItem item={item} key={item.task}/>
                        }
                    )}
                </ul>
            </div>
        )
    }
}

export default List;