import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => <h1>{props.kurssi}</h1>

const Osa = (props) => <p>{props.nimi} {props.tehtavia}</p>

const Sisalto = (props) => {
  return (
    <div>
      <Osa nimi={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia}/>
      <Osa nimi={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia}/>
      <Osa nimi={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia}/>
    </div>
  )
}

const Yhteensa = (props) =>
  <p>Yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia +
  props.osat[2].tehtavia} tehtävää </p>

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
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
  }


  return (
    <div>
      <Otsikko kurssi = {kurssi.nimi}/>
      <Sisalto osat = {kurssi.osat}/>
      <Yhteensa osat = {kurssi.osat}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
