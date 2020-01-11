import React, { useRef, useState } from 'react';
import * as Styled from './style';

const Input = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [ content, setContent ] = useState('');

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setContent(value);
    };

    const handleClickSubmit = () => {

    };

    return (
        <Styled.Container>
            <Styled.Input ref={inputRef} onChange={handleChangeInput} />
            <Styled.Button disabled={!content} onClick={handleClickSubmit}>등록</Styled.Button>
        </Styled.Container>
    )
};

export default Input;