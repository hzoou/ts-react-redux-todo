import { TodosState, TodosAction } from '../types';
import { createReducer } from 'typesafe-actions';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/types';

const initialState: TodosState = [
    { id: 1, text: '밥먹기', done: true },
    { id: 2, text: '놀기', done: true },
    { id: 3, text: '잠자기', done: false }
];

const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, { payload: text }) =>
        [...state, { id: Math.max(...state.map(todo => todo.id)) + 1, text, done: false }],
    [TOGGLE_TODO]: (state, { payload: id }) =>
        state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    [REMOVE_TODO]: (state, { payload: id }) =>
        state.filter(todo => todo.id !== id)
});

export default todos;
