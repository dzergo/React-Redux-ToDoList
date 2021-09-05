import React from 'react';

export default class HelloClass extends React.Component {
    // state = {counter: 0} старая школа, кринж - в конструкторе инит ок да?
    render () {
        return (
                <input 
                type="text" 
                value={this.props.value} 
                onChange={this.props.onChange}/>
        )
    }
}