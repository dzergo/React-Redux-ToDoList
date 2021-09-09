import React from "react";
import {connect} from "react-redux";
import {removeToDo, toggleToDo, saveToDo} from '../store/actions';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isEditing: false,
             changeText: this.props.item.title
        }
    }

    handleEditing = (e) => {
        this.props.item.title = this.state.changeText;

        if(this.state.isEditing) 
            this.props.saveToDo(this.props.item)

        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    inputChange = (e) => {
        this.setState({
            changeText: e.target.value
        })
    } 

    onKeyPress = (e) => {
        if(e.key === "Enter" && this.state.changeText.trim()) {
            this.props.item.title = this.state.changeText;
            this.props.saveToDo(this.props.item);
            this.setState({
                isEditing: !this.state.isEditing
            })
        }
    }
    render () {
        return (
                <>
                  { this.state.isEditing ? 
                    <li className="editing" >
                        <input 
                            className="edit" 
                            value={this.state.changeText} 
                            autoFocus onBlur={(e) => this.handleEditing(e)} 
                            onChange={(e) => this.inputChange(e)}
                            onKeyPress={(e) => this.onKeyPress(e)}    
                        />
                    </li>
                    :
                    <li className={this.props.item.completed ? 'completed' : ""} >
                        <div className="view" >
                            <input 
                                className="toggle" 
                                type="checkbox" 
                                checked={this.props.item.completed}
                                value={this.props.item.completed}
                                onChange={() => this.props.toggleToDo(this.props.item.id)}
                            />
                            <label onDoubleClick={this.handleEditing}>{this.props.item.title}</label>
                            <button 
                                className="destroy"
                                onClick={() => this.props.removeToDo(this.props.item.id)}>
                            </button>
                        </div>
                    </li>
                    }
                </>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = {
    removeToDo,
    toggleToDo,
    saveToDo
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);