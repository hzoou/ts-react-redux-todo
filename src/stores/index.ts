import { combineReducers, createStore } from 'redux';
import todos from '../reducers';

const RootReducer = combineReducers({ todos });
const TodoStore = createStore(RootReducer);

export type RootState = ReturnType<typeof RootReducer>;
export default TodoStore;
