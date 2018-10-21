import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => <button onClick = {props.state}>{props.name}</button>

const VoteButton = (props) => {
  const copy = [...props.state.state.score]
  copy[props.state.state.selected] += 1
  return(
    <button onClick = {props.state.setVal("score", copy)}>vote</button>
  )
}

const MostVotes = (props) => {
  if(Math.max(...props.score) === 0){
    return <p>no votes have been cast</p>
  }
  return (
    <div>
      <h3>anecdote with most votes</h3>
      <p>{props.anec[props.score.indexOf(Math.max(...props.score))]}</p>
      <p>has {Math.max(...props.score)} votes</p>
    </div>
  )
}

const Scorer = ({state}) => <p>has {state.score[state.selected]} votes</p>

const Anecdoter = ({list, state}) => <p>{list.anecdotes[state.selected]}</p>



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: Math.floor(Math.random() * (anecdotes.length)),
      score: [0,0,0,0,0,0]
    }
  }
  setVal = (state, val) => () => this.setState({[state]: val})

  render() {
    return (
      <div>
        <Anecdoter list = {this.props} state = {this.state}/>
        <Scorer state = {this.state}/>
        <VoteButton state = {this}/>
        <Button state = {this.setVal("selected", Math.floor(Math.random() * (anecdotes.length)))} name = "next anecdote"/>
        <MostVotes  anec = {this.props.anecdotes} score = {this.state.score}/>
      </div>
    )
  }
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
