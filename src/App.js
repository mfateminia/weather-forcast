import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import './bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
