import React from 'react';
import ReactDOM from 'react-dom';
import Menu from "./components/Menu";
import List from "./components/List";

ReactDOM.render(
    <Menu/>,
    document.getElementById('menu-root')
);

ReactDOM.render(
    <List/>,
    document.getElementById('list-root')
);

