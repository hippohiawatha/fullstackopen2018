import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => <h1>{props.kurssi}</h1>

const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>

const Sisalto = (props) => {
  return (
    <div>
      <Osa osa = {props.osa1} tehtavia = {props.tehtavia1} />
      <Osa osa = {props.osa2} tehtavia = {props.tehtavia2} />
      <Osa osa = {props.osa3} tehtavia = {props.tehtavia3} />
    </div>
  )
}

const Yhteensa = (props) => <p>Yhteensä {props.yhteensa} tehtävää</p>
const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]

  return (
    <div>
      <Otsikko kurssi = {kurssi} />
      <Sisalto
      osa1 = {osat[0].nimi} tehtavia1 = {osat[0].tehtavia}
      osa2 = {osat[1].nimi} tehtavia2 = {osat[1].tehtavia}
      osa3 = {osat[2].nimi} tehtavia3 = {osat[2].tehtavia}/>
      <Yhteensa yhteensa = {osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)