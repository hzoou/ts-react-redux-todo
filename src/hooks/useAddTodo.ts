import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addTodoAction } from '../actions';

const useAddTodo = () => {
    const dispatch = useDispatch();
    return useCallback(text => dispatch(addTodoAction(text)), [dispatch]);
};

export default useAddTodo;
