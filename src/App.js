import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
            {
                this.state.persons.map((person, index) => {
                    return (
                        <Person 
                            name={person.name} 
                            age={person.age}
                            click={() => this.deletePersonHandler(index)}
                            edit={(event) => this.updatePersonHandler(event, person.id)} 
                            key={person.id} />    
                    )
                })
            }
        </div>
    );
    }
}

export default App;
