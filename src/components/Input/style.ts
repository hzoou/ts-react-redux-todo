import styled from 'styled-components';

interface IInputProps {
    ref: HTMLInputElement,
}

const Container = styled.section`
    display: flex;
    width: 100%;
`;

const Input = styled.input.attrs<IInputProps>({
    type: 'text',
    placeholder: '할 일을 입력하세요!',
})`
    flex: 1;
    font-size: 1rem;
    padding: 1rem;
    margin-right: 0.5rem;
    color: black;
    border-radius: 1rem;
`;

const Button = styled.button`
    padding: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    background: #FFA500B3;
    color: white;
    cursor: pointer;

    &:hover {
        background: #FFA500;
    }
    
    &:disabled {
        background: #eaeaea;
        color: #bdbdbd;
        cursor: not-allowed;
    }
`;

export { Container, Input, Button }
