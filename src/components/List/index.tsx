import React from 'react';
import * as Styled from  './style';

import Item from '../Item';

import useTodos from '../../hooks/useTodos';

const List = () => {
    const todos = useTodos();

    return (
        <Styled.List>
            {todos.map(todo => (
                <Item todo={todo} key={todo.id} />
            ))}
        </Styled.List>
    )
};

export default List;