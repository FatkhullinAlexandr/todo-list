import { observer } from 'mobx-react-lite';
import React from 'react';

import todos from '../store/todos';

interface TodoItemProps {
    id: number;
    text: string;
    completed: boolean;
    index: number;
}

const TodoItem: React.FC<TodoItemProps> = observer(({ id, text, completed, index }) => {
    return (
        <li className={completed ? 'todo completed' : 'todo'}>
            <div className="todo-body">
                <input type="checkbox" checked={completed} onChange={() => todos.completed(id)} />
                <strong className="todo-num">{index + 1}.</strong>
                <p>{text}</p>
            </div>
            <button onClick={() => todos.removeTodo(id)}>Удалить</button>
        </li>
    );
});

export default TodoItem;
