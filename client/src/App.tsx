import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation'
import WeatherToday from './components/WeatherToday'
import 'bulma/css/bulma.css'

type WeatherData = {
  data: {
    currently: {
      temperature: number
    }
  }
}

const App: React.FC = () => {
  //const [coords, setCoords] = useState('60.4508322,22.2637141')
  const [data, setData] = useState()

  useEffect(() => {
    const url = process.env.NODE_ENV === 'production'
      ? '/forecast/'
      : 'http://localhost:3001/forecast'
    const getForecastFromNetwork = () => {
      return fetch(url)
        .then((response) => {
          return response.json();
        })
        .catch(() => {
          return null;
        })
    }

    getForecastFromNetwork()
      .then((forecast) => {
        setData(forecast)
      })
  }, [])



  return (
    <React.Fragment>
      <header className='hero is-info is-bold is-large'>
        <nav className='hero-header'>
          <Navigation />
        </nav>
        <main className='hero-body has-text-centered'>
          <WeatherToday data={data} />
        </main>
        <section className='hero-foot has-text-centered'>hero footer</section>
      </header>
      <footer className='footer has-text-centered'>footer</footer>
    </React.Fragment>
  );
}

export default App;
