import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {persons:[
        {name: 'schemr', age: 34},
        {name: 'chris', age: 33},
        {name: 'zesta', age: 30}
    ]};
    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons:persons
        });
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
                            key={index} />    
                    )
                })
            }
        </div>
    );
    }
}

export default App;
