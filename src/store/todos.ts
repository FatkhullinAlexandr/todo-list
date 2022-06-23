import { makeAutoObservable } from 'mobx';
import { ITodo } from '../types/types';

class Todos {
    items: ITodo[] = [
        { id: 0, text: 'Купить билеты', completed: false },
        { id: 1, text: 'Сделать commit', completed: false },
        { id: 2, text: 'Купить продукты', completed: false },
        { id: 3, text: 'Забрать посылку', completed: false },
    ];
    filter: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo: ITodo) {
        this.items.push(todo);
    }

    removeTodo(id: number) {
        this.items = this.items.filter((item) => item.id !== id);
    }

    completed(id: number) {
        this.items = this.items.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item,
        );
    }

    changeFilter(n: number) {
        this.filter = n;
    }
}

export default new Todos();
