import React, { Component } from 'react';
import './App.css';
import data from './data.js'

class App extends Component{
    constructor(props){
      super(props);

      this.state = {
        data: data
      }

    }
     
    render(){
      
      return (
        <div>
      
      <header className="navbar"> 
        <h1 className="title">Home</h1>
      </header>
      
      <div className="content"></div>
      
      
      <button className="button">&lt; Previous</button>
      <button className="button2"> Next ></button>   

      
    </div>
  );
}
}

  export default App;
