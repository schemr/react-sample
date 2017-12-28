import React, { Component } from 'react';
import classes from './App.css';
import Headrers from '../components/Headers/Headers';
import Persons from '../components/Persons/Persons';

class App extends Component {
    state = {
        persons:[
            {id: 'A', name: 'schemr', age: 34},
            {id: 'B', name: 'chris', age: 33},
            {id: 'C', name: 'zesta', age: 30}
        ],
        otherState: 'some other value',
        showPersons: false
    };

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

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState( { showPersons: !doesShow } );
    }

    render() {
        let persons = null;
        if ( this.state.showPersons ) {
            persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} edited={this.updatePersonHandler} />
        }
        return (
            <div className={classes.App}>
                <Headrers 
                    appTitle="React Sample App" 
                    clicked={this.togglePersonsHandler}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons} />
                {persons}      
            </div>
        );
        
    }
}

export default App;
