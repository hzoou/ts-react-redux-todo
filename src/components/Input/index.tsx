import React, { ChangeEvent, useRef, useState } from 'react';
import * as Styled from './style';

import useAddTodo from '../../hooks/useAddTodo';

const Input = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [ value, setValue ] = useState('');
    const addTodo = useAddTodo();

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleClickSubmit = () => {
        addTodo(value);
        setValue('');
    };

    return (
        <Styled.Container>
            <Styled.Input ref={inputRef} value={value} onChange={handleChangeInput} />
            <Styled.Button disabled={!value} onClick={handleClickSubmit}>등록</Styled.Button>
        </Styled.Container>
    )
};

export default Input;