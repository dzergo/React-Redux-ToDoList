import React from "react";
import ToDoItem from "./ToDoItem";
import {connect} from "react-redux";
import {toggleAllToDo} from "../store/actions";

export const ToDoList = (props) => {
      
    return (
        <section className="main">
        {
            props.todos.length ? 
                <input 
                    id="toggle-all" 
                    className="toggle-all" 
                    type="checkbox" 
                    checked={props.todos.every(i=>i.completed)} 
                    onChange={() => props.toggleAllToDo(countActive(props))} 
                /> : null
        }
        <label htmlFor="toggle-all" ></label>
        <ul className="todo-list" >
            {
                filterToDos(props).map(
                    item =>
                        <ToDoItem 
                            key={item.id} 
                            item={item} 
                            toggleToDo={props.toggleToDo} 
                            removeToDo={props.removeToDo}
                        />                        
                    )
            }
        </ul>
    </section>
    )

}

const filterToDos = (props) => {
    return props.todos.filter(e =>{
        if(props.filter === 'all') {
            return e
        }
        else if (props.filter === 'active') {
            return e.completed === false
        }
        else {
            return e.completed === true
        }
    })
}

const countActive = (props) => {
    return props.todos.filter(e => e.completed === false).length;
}

const mapStateToProps = (state) => {
    return {todos: state.todos, filter: state.filter};
}

const mapDispatchToProps = {
    toggleAllToDo
}


export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);