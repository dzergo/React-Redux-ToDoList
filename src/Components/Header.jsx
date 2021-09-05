import React from 'react';
import {useState} from 'react';
import {connect} from "react-redux";
import {createToDo} from "../store/actions";

export const Header = (props) => {
    const [value, setValue] = useState("");

    const onKeyPress = (e) => {
        if(e.key === "Enter" && value.trim()) {
            props.createToDo(value);
            setValue("")
        }
    }

    return(
        <header className='header'>
            <h1>todos</h1>
            <input 
                type="text" 
                className='new-todo' 
                placeholder="What needs to be done?"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e) => onKeyPress(e)} />
        </header>
    );
}


const mapDispatchToProps = {
    createToDo
}


export default connect(null, mapDispatchToProps)(Header);