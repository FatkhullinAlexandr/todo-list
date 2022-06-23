import React from 'react';
import { observer } from 'mobx-react-lite';

import TodoItem from './TodoItem';
import todos from '../store/todos';

const TodoList: React.FC = observer(() => {
    return (
        <div className="todo-list">
            <ul>
                {todos.filter !== 0
                    ? todos.items
                          .filter((item) =>
                              todos.filter === 1
                                  ? item.completed === true
                                  : item.completed === false,
                          )
                          .map((todo, index) => <TodoItem {...todo} index={index} key={todo.id} />)
                    : todos.items.map((todo, index) => (
                          <TodoItem {...todo} index={index} key={todo.id} />
                      ))}
            </ul>
        </div>
    );
});

export default TodoList;
