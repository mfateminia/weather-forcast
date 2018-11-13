import React from 'react';
import { observer, inject } from 'mobx-react';
import ViewResults from '../ViewResults/ViewResults';
import './SearchBar.css';
import '../bootstrap.css';

const SearchBar = (props) => {
    
    return (
        <div className='search-box-wrapper'>
            <input className = 'search-box-wrapper__input input-group' 
                    type = 'text' 
                    placeholder='Search City...'
                    onChange={props.store.updateSearchedCity}
                    />
            <ViewResults city={props.store.searchedCity}/>
        </div>
    );   
}

export default inject('store')(observer(SearchBar));