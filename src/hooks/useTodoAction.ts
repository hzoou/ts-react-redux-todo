import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggleTodoAction, removeTodoAction } from '../actions';

const useTodoActions = (id: number) => {
    const dispatch = useDispatch();

    const onToggle = useCallback((e) => {
        e.preventDefault();
        dispatch(toggleTodoAction(id));
    }, [dispatch, id]);

    const onRemove = useCallback(() => {
        dispatch(removeTodoAction(id))
    }, [dispatch, id]);

    return { onToggle, onRemove };
};

export default useTodoActions;