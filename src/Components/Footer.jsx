import React from "react";
import {connect} from "react-redux";
import {changeFilter,clearCompletedToDo} from '../store/actions';
import {Filter} from "../enums/filters";

class Footer extends React.Component {
    render () {
        return (
            <>
            {this.props.todos.length > 0 &&
                <footer className="footer" >
                    <span className="todo-count" >
                        <strong>
                            {this.props.todos.filter(item => item.completed === false).length}
                        </strong> items left
                    </span>
                    <ul className="filters">
                        <li>
                            <a  
                                href="#/" 
                                className={this.props.filter === Filter.all ? 'selected' : null } 
                                onClick={() =>this.props.changeFilter(Filter.all)} 
                            >All</a>
                        </li>
                        <li>
                            <a  
                                href="#/active" 
                                className={this.props.filter === Filter.active ? 'selected' : null } 
                                onClick={() =>this.props.changeFilter(Filter.active)}
                            >Active</a>
                        </li>
                        <span> </span>
                        <li>
                            <a  
                                href="#/completed" 
                                className={this.props.filter === Filter.completed ? 'selected' : null } 
                                onClick={() =>this.props.changeFilter(Filter.completed)}
                            >Completed</a>
                        </li>
                    </ul>
                    { this.props.todos.some(i=>i.completed) ? 
                        <button 
                            className="clear-completed" 
                            onClick={this.props.clearCompletedToDo}
                        >Clear completed</button> : null
                    }
                </footer>
            }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        filter: state.filter
    };
}

const mapDispatchToProps = {
    changeFilter,
    clearCompletedToDo
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);