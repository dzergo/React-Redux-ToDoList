import {ACTION_CREATE_TODO,ACTION_REMOVE_TODO,ACTION_TOGGLE_TODO,ACTION_TOGGLE_ALL_TODO,ACTION_CLEAR_ALL_COMPLITED_TODO,ACTION_CHANGE_FILTER, ACTION_SAVE_TODO} from "../reducers"

export const createToDo = (payload) => ({type: ACTION_CREATE_TODO, payload: payload.trim()});

export const removeToDo = (payload) => ({type: ACTION_REMOVE_TODO, payload});

export const toggleToDo = (payload) => ({type: ACTION_TOGGLE_TODO, payload});

export const toggleAllToDo = (payload) => ({type: ACTION_TOGGLE_ALL_TODO, payload});

export const changeFilter = (payload) => ({type: ACTION_CHANGE_FILTER, payload});

export const clearCompletedToDo = () => ({type: ACTION_CLEAR_ALL_COMPLITED_TODO});

export const saveToDo = (payload) => ({type: ACTION_SAVE_TODO, payload});

