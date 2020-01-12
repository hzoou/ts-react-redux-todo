import { createAction } from 'typesafe-actions';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './types';

export const addTodoAction = createAction(ADD_TODO)<string>();
export const toggleTodoAction = createAction(TOGGLE_TODO)<number>();
export const removeTodoAction = createAction(REMOVE_TODO)<number>();