import React from 'react';

import Title from './components/Title';
import Container from './components/Container';
import List from './components/List';
import Input from './components/Input';

const App: React.FC = () => {
    return (
        <div className="App">
            <Title />
            <Container>
                <List />
                <Input />
            </Container>
        </div>
    );
};

export default App;
