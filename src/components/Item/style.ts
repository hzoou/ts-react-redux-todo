import styled from 'styled-components';

interface IItemProps {
    done: boolean
}

const Item = styled.article`
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.5rem;
    background: #faebd782;
`;

const CheckBox = styled.input.attrs(() => ({
    type: 'checkbox',
}))`
    opacity: 0;
    cursor: pointer;
    
    &:checked ~ span:after {
        display: block;
    }
`;

const CheckMark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 3px;
    background-color: #eee;
    
    &:after {
        content: "";
        position: absolute;
        display: none;
        left: 8px;
        top: 3px;
        width: 3px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
`;

const Text = styled.label<IItemProps>`
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    line-height: 20px;
    text-decoration: ${({ done }) => done && 'line-through' };
    color: ${({ done }) => done && '#5c5c5c' };
    
    &:hover > input ~ span {
        background-color: #ffa50073;
    }
    
    & > input:checked ~ span {
        background-color: #ffa500;
    }
`;

export { Item, CheckBox, CheckMark, Text }