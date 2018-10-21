import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const Statistic = ({stat, status}) => <p>{stat} {status}</p>

const Statistics = ({status}) => {

  if(status.hyvä === 0 && status.neutraali === 0 && status.huono === 0){
    return (<p>Ei yhtään palautettaa annettu</p>)
  }

  return (
    <div>
      <table>
        <tbody>
          <tr><td><Statistic stat = "hyvä" status = {status.hyvä}/></td></tr>
          <tr><td><Statistic stat = "neutraali" status = {status.neutraali}/></td></tr>
          <tr><td><Statistic stat = "huono" status = {status.huono}/></td></tr>
          <tr><td><Statistic stat = "keksiarvo" status =
          {Math.round((status.hyvä - status.huono) / (status.hyvä + status.neutraali + status.huono) * 10) / 10}/></td></tr>

          <tr><td><Statistic stat = "positiivisia" status =
          {Math.round(status.hyvä / (status.hyvä + status.neutraali + status.huono) * 1000) / 10 + "%"}/></td></tr>
          </tbody>
      </table>
    </div>
  )
}

const Button = (props) => <button onClick = {props.handleClick}>{props.stat}</button>

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyvä: 0,
      neutraali: 0,
      huono: 0
    }
  }

  setVal = (stat, val) => () => this.setState({[stat]: val})

  render() {
    return(
      <div>
        <h1> anna palautetta </h1>
        <Button stat = "hyvä" handleClick = {this.setVal("hyvä", this.state.hyvä + 1)}/>
        <Button stat = "neutraali" handleClick = {this.setVal("neutraali", this.state.neutraali + 1)}/>
        <Button stat = "huono" handleClick = {this.setVal("huono", this.state.huono + 1)}/>
        <h2>Statistiikka</h2>
        <Statistics status = {this.state}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
