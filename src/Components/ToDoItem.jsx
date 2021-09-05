import React from "react";
import {connect} from "react-redux";
import {removeToDo, toggleToDo} from '../store/actions';

class ToDoItem extends React.Component {
    render () {
        return (
                <>
                  {this.props.todos.isEditing ? 
                    <li class="editing" >
                        <div class="view">
                            <input class="toggle" type="checkbox" />
                                <label >
                                    121
                                </label>
                            <button class="destroy"></button>
                        </div>
                        <input class="edit" value="121" />

                    </li>
                    :
                    <li className={this.props.item.completed ? 'completed' : ""} >
                        <div className="view" >
                            <input 
                                className="toggle" 
                                type="checkbox" 
                                checked={this.props.item.completed}
                                onChange={() => this.props.toggleToDo(this.props.item.id)}
                            />
                            <label>{this.props.item.title}</label>
                            <button 
                                className="destroy"
                                onClick={() => this.props.removeToDo(this.props.item.id)}>
                            </button>
                        </div>
                        <input className="edit" value="asd" readOnly/>
                    </li>}
                </>
        );
    }
}

const mapDispatchToProps = {
    removeToDo,
    toggleToDo
}

export default connect(null, mapDispatchToProps)(ToDoItem);