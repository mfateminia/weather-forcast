import { observable, action, decorate } from 'mobx';

class Store {
    searchedCity = 'Copenhagen';
    updateSearchedCity = (e) => {e.preventDefault(); this.searchedCity = e.target.value};
}    

decorate(Store, {
    searchedCity: observable,
    updateSearchedCity: action,
});

export default new Store();

