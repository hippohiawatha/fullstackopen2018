import React from 'react';
import Person from './components/person'
import contactService from './services/contacts'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNum: '',
      search: ''
    }
  }

  componentDidMount(){
    console.log('did mount')
    contactService
      .getAll()
      .then(response => {
        this.setState({persons: response.data})
      })
      .catch(error => {
        alert("ei dataa")
      })
  }

  addPerson = (event) => {
    event.preventDefault()
    const personObj = {name: this.state.newName, number: this.state.newNum}
    let persons = this.state.persons
    if(!persons.map(pers => pers.name).includes(personObj.name)){
      contactService
        .create(personObj)
        .then(response => {
          this.setState({
            persons: this.state.persons.concat(response.data),
            newName: '',
            newNum: ''
          })
        })
    }
    else{
      const index = this.state.persons.findIndex(per => per.name === personObj.name)
      const id = this.state.persons[index].id
      contactService
        .update(id, personObj)
        .then(person => {
          console.log(person.id)
          const persons = this.state.persons.filter(pers => pers.id !== id)
          this.setState({
            persons: persons.concat(person),
            newName: '',
            newNum: ''
          })
        })
    }
  }

  inputName = (event) => {
    this.setState({newName: event.target.value })
  }
  inputNum = (event) => {
    this.setState({newNum: event.target.value})
  }

  search = (event) => {
    this.setState({search: event.target.value})
  }

  remover = (id, name) => {
    return() => {
      if(window.confirm("poistetaanko " + name)){
        contactService
          .remove(id)
          .then(response => {
            this.setState({
              persons: this.state.persons.filter(per => per.id !== id)
            })
          })
      }
    }
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>search: <input value={this.state.search} onChange={this.search}/></div>

        <h2>Lisää uusi</h2>
        <form onSubmit={this.addPerson}>
          <div>nimi: <input value={this.state.newName} onChange={this.inputName}/></div>
          <div>numero: <input value={this.state.newNum} onChange={this.inputNum}/></div>
          <div><button type="submit">lisää</button></div>
        </form>
        <h2>Numerot</h2>
        <div>
          <Person state={this.state} remover={this.remover}/>
        </div>
      </div>
    )
  }
}

export default App
