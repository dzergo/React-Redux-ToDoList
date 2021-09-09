import { Filter } from "../../enums/filters";

export const ACTION_CREATE_TODO = 'CREATE';
export const ACTION_REMOVE_TODO = 'REMOVE';
export const ACTION_CLEAR_ALL_COMPLITED_TODO = 'CLEARALLCOMPLETED';
export const ACTION_TOGGLE_TODO = 'TOGGLE';
export const ACTION_TOGGLE_ALL_TODO = 'TOGGLEALL';
export const ACTION_CHANGE_FILTER = 'CHANGEFILTER';
export const ACTION_SAVE_TODO = 'SAVETODO';


const initialState = {
    todos: [],
    filter: Filter.all
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ACTION_CREATE_TODO:
            return {...state, todos:[...state.todos, 
                {id: Date.now(), title: payload, completed: false, isEditing: false}]};
        case ACTION_REMOVE_TODO:
            return {...state, todos: state.todos.filter(item => item.id !== payload )};
        case ACTION_TOGGLE_TODO:
            return {...state, todos: state.todos.map(item => item.id === payload ? {...item, completed: !item.completed} : item)};
        case ACTION_TOGGLE_ALL_TODO:
            return {...state, todos: payload > 0 ? 
                state.todos.map( item => !item.completed ? {...item, completed: true} : item) :
                state.todos.map( item => !item.completed ? item : {...item, completed: false})
            };
        case ACTION_CHANGE_FILTER:
            return {...state, filter: payload};
        case ACTION_CLEAR_ALL_COMPLITED_TODO:
            return {...state, todos: state.todos.filter(item => item.completed !== true )};
        case ACTION_SAVE_TODO:
            return {...state, todos: state.todos.map(item => item.id === payload.id ? {...item, title: payload.title} : item)}
        default:
            return state;
    }

}

export default reducer;