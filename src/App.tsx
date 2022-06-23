import React from 'react';

import Header from './components/Header';
import TodoList from './components/TodoList';

import './scss/index.scss';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="wrapper">
                <h1 className="title">Todo List</h1>
                <Header />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
