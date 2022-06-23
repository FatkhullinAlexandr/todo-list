import React from 'react';
import { observer } from 'mobx-react-lite';

import todos from '../store/todos';

const Header: React.FC = observer(() => {
    const filterItems = ['Все', 'Выполненные', 'Невыполненные'];

    const [open, setOpen] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string>('');
    const filter = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.body.addEventListener('click', function (e: any) {
            if (!e.path.includes(filter.current)) {
                setOpen(false);
            }
        });
    }, []);

    const onClickFilterItem = (index: number) => {
        todos.changeFilter(index);
        setOpen(false);
    };

    const onClickAddTodo = () => {
        const newTodo = {
            id: Date.now(),
            text: value,
            completed: false,
        };
        console.log(newTodo);

        if (value) {
            todos.addTodo(newTodo);
            setValue('');
        }
    };

    return (
        <div className="header">
            <div className="header-add">
                <input
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                    type="text"
                    placeholder="Введите название Todo"
                />
                <button onClick={() => onClickAddTodo()}>Добавить</button>
            </div>
            <div className="header-filter" ref={filter}>
                <span onClick={() => setOpen(!open)}>Показать: {filterItems[todos.filter]}</span>
                <div className={open ? 'header-filter-popup open' : 'header-filter-popup'}>
                    <ul>
                        {filterItems.map((item, index) => (
                            <li
                                className={index === todos.filter ? 'active' : ''}
                                onClick={() => onClickFilterItem(index)}
                                key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
});

export default Header;
