import { useSelector } from 'react-redux';
import { RootState } from '../stores';

const useTodos = () => {
    const todos = useSelector((state: RootState) => state.todos);
    return todos;
};

export default useTodos;