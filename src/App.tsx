import React from 'react';

import Title from './components/Title';
import Container from './components/Container';
import List from './components/List';
import Input from './components/Input';

const App: React.FC = () => {
    const items = [
        {
            text: '잠자기'
        },
        {
            text: '계약하기',
            done: true
        },
        {
            text: '밥먹기',
            done: true
        },
    ];

    return (
        <div className="App">
            <Title />
            <Container>
                <List items={items} />
                <Input />
            </Container>
        </div>
    );
};

export default App;
