import React from 'react';
import * as Styled from './style';

interface IItemProps {
    index: number,
    text: string,
    done: boolean,
    onClick: Function
}

const Item = ({ index, text, done, onClick }: IItemProps) => {

    return (
        <Styled.Item>
            <Styled.Text done={done} onClick={(e) => onClick(e, index)}>
                {text}
                <Styled.CheckBox checked={done} readOnly={true} />
                <Styled.CheckMark />
            </Styled.Text>
            <Styled.Button>&times;</Styled.Button>
        </Styled.Item>
    )
};

export default Item;