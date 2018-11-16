import React from 'react'

const Otsikko = ({kurssi}) => <h1>{kurssi}</h1>

const Osa = ({osa}) => <p>{osa.nimi} {osa.tehtavia}</p>

const Sisalto = ({osat}) => <div>{osat.map(osa => <Osa key={osa.id} osa={osa} />)}</div>

const Kurssi = ({kurssi}) => {
  return(
    <div>
      <Otsikko kurssi = {kurssi.nimi}/>
      <Sisalto osat = {kurssi.osat}/>
      <Yhteensa osat = {kurssi.osat}/>
    </div>
  )
}

const Yhteensa = ({osat}) =>
  <p>yhteensä {osat.map(osa => osa.tehtavia).reduce((a,b) => a + b)} tehtävää</p>

export default Kurssi
