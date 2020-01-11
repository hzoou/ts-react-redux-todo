import React, { useState } from 'react';
import * as Styled from  './style';

import Item from '../Item';

interface IListProps {
    items: { text: string, done?: boolean }[]
}

const List = ({ items }: IListProps) => {
    const [ todos, setTodos ] = useState(items);
    const handleClickItem = (e: Event, index: number) => {
        e.preventDefault();
        const updatedTodos = todos.map((todo, i) => i === index ? {...todo, done: !todo.done} : todo);
        setTodos(updatedTodos);
    };

    return (
        <Styled.List>
            {todos.map(({ text, done = false }, i) => {
                return (
                    <Item key={'todo' + i} index={i} text={text} done={done} onClick={handleClickItem} />
                )
            })}
        </Styled.List>
    )
};

export default List;