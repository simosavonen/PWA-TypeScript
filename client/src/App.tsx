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
    const weatherString = localStorage.getItem('weatherData')
    if (weatherString) {
      const weatherData = JSON.parse(weatherString)
      setData(weatherData)
    }
  }, [])

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
        localStorage.setItem('weatherData', JSON.stringify(forecast))
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
      <footer className='footer has-text-centered'>
        <p>PWA TypeScript demo app - by Simo Savonen.</p>
        Replicates the <a href='https://codelabs.developers.google.com/codelabs/your-first-pwapp/'>Google Codelabs example</a> but
        uses React for the front-end, and TypeScript instead of plain JS.
        <p><a href='https://darksky.net/poweredby/'>Powered by Dark Sky API</a>,
        weather icons designed by <a href='http://adamwhitcroft.com/climacons/'>@adamwhitcroft</a></p>
      </footer>
    </React.Fragment>
  );
}

export default App;
