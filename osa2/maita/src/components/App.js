import React from 'react';
import axios from 'axios';
import Countries from './countries'

class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      search: '',
    }
  }

  componentDidMount(){
    console.log('did mount')
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({countries: response.data})
    })
  }

  search = (event) => {
    this.setState({search: event.target.value})
  }

  render() {
    return (
      <div>
        <div>search: <input value={this.state.search} onChange={this.search}/></div>
        <div><Countries state = {this.state}/></div>
      </div>
    )
  }

}

export default App
