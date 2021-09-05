import './App.css';
import React from 'react';
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import Footer from './Components/Footer'

class App extends React.Component {

  render () {
    
    return (
      <section className='todoapp'>
        <Header/>
        <ToDoList/>
        <Footer/>
      </section>
    );
  }
}

export default App;
