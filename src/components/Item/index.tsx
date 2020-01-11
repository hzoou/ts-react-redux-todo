import React from 'react';
import * as Styled from './style';

interface IItemProps {
    text: string,
    done: boolean
}

const Item = ({ text, done }: IItemProps) => {
    return (
        <Styled.Item>
            <Styled.Text done={done}>
                {text}
                <Styled.CheckBox defaultChecked={done} />
                <Styled.CheckMark />
            </Styled.Text>
        </Styled.Item>
    )
};

export default Item;