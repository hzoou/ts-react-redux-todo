import React from 'react';
import * as Styled from './style';

import { Todo } from '../../types';
import useTodoActions from '../../hooks/useTodoAction';

interface IItemProps {
    todo: Todo;
};

const Item = ({ todo }: IItemProps) => {
    const { onToggle, onRemove } = useTodoActions(todo.id);

    return (
        <Styled.Item>
            <Styled.Text done={todo.done} onClick={onToggle}>
                {todo.text}
                <Styled.CheckBox checked={todo.done} readOnly={true} />
                <Styled.CheckMark />
            </Styled.Text>
            <Styled.Button onClick={onRemove}>&times;</Styled.Button>
        </Styled.Item>
    )
};

export default Item;