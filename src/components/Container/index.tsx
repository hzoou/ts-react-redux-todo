import React from 'react';
import * as Styled from './style';

interface ContainerProps {
    children: JSX.Element[]
}

const Container = ({ children }: ContainerProps) => {
    return (
        <Styled.Container>
            {children}
        </Styled.Container>
    )
};

export default Container;