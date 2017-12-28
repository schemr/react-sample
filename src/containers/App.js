import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
    state = {persons:[
        {id: 'A', name: 'schemr', age: 34},
        {id: 'B', name: 'chris', age: 33},
        {id: 'C', name: 'zesta', age: 30}
    ]};
    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons:persons
        });
    };

    updatePersonHandler = (event, id) => {
        const updatePersonIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const updatePerson = this.state.persons[updatePersonIndex]
        updatePerson.name = event.target.value;
        
        const persons = [...this.state.persons];
        persons[updatePersonIndex] = updatePerson;

        this.setState({persons:persons});
    }
    render() {
    return (
        <div className="App">
            <Persons persons={this.state.persons} clicked={this.deletePersonHandler} edited={this.updatePersonHandler} />
        </div>
    );
    }
}

export default App;
