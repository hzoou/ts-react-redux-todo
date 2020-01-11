import React from 'react';
import * as Styled from  './style';

import Item from '../Item';

interface IListProps {
    items: { text: string, done?: boolean }[]
}

const List = ({ items }: IListProps) => {
    return (
        <Styled.List>
            {items.map(({ text, done = false }, i) => {
                return (
                    <Item key={'todo' + i} text={text} done={done} />
                )
            })}
        </Styled.List>
    )
};

export default List;