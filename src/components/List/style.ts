import styled from 'styled-components';

const List = styled.section`
    flex: 1;
    width: 100%;
    margin: 1.5rem 0;
    overflow-y: scroll;
    
    &::-webkit-scrollbar { 
        //display: none
        background: none;
        width: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #ffa50073;
        border-radius: 1rem;
    }
`;

export { List };
