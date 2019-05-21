import React from 'react'

type WeatherData = {
  data: {
    currently: {
      temperature: number
      icon: string
      summary: string
    }
    daily: {
      data: [{
        time: number
        icon: string
        temperatureHigh: number
        summary: string
      }]
    }
  }
}

const WeatherToday: React.FC<WeatherData> = ({ data }) => {

  const getWeekDay = (timestamp: number) => {
    const weekdays = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']
    const date = new Date(timestamp * 1000)
    return weekdays[date.getDay()]
  }

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case 'clear-day':
        return '/images/climacons/Sun.svg'
      case 'clear-night':
        return '/images/climacons/Moon.svg'
      case 'rain':
        return '/images/climacons/Cloud-Rain.svg'
      case 'snow':
        return '/images/climacons/Cloud-Snow.svg'
      case 'sleet':
        return '/images/climacons/Cloud-Hail.svg'
      case 'wind':
        return '/images/climacons/Wind.svg'
      case 'fog':
        return '/images/climacons/Cloud-Fog.svg'
      case 'cloudy':
        return '/images/climacons/Cloud.svg'
      case 'partly-cloudy-day':
        return '/images/climacons/Cloud-Sun.svg'
      case 'partly-cloudy-night':
        return '/images/climacons/Cloud-Moon.svg'
      default:
        return ''
    }
  }

  if (!data) {
    return (<div>Loading...</div>)
  }
  console.log(data)
  return (
    <div className='columns is-centered'>
      <div className='card column is-two-thirds'>
        <header className='card-header'>
          <p className='card-header-title is-centered' style={{ fontSize: '5vw' }}>Turku, Finland</p>
        </header>
        <div className='card-content level is-mobile'>

          <div className='level-item'>
            <figure className='image'>
              <img
                src={getWeatherIcon(data.currently.icon)}
                alt={data.currently.icon}
                style={{ width: '15vw', transform: 'scale(1.6,1.6)' }}
                title={data.currently.summary}
              />
            </figure>
          </div>
          <div className='level-item' style={{ fontSize: '10vw' }}>
            {data.currently.temperature}
          </div>
          <div className='level-item' style={{ fontSize: '10vw' }}>&deg;C</div>

        </div>
        <footer className='card-footer level'>
          {data.daily.data.slice(1, 6).map(d =>
            <div key={d.time} className='level-item has-text-centered'>
              <div>
                <h3 className='title has-text-black' style={{ fontSize: '2vw', padding: '2vw' }}>
                  {getWeekDay(d.time)}
                </h3>
                <h2 className='title has-text-black' style={{ fontSize: '3vw' }}>
                  {d.temperatureHigh}&nbsp;&deg;C</h2>
                <figure className='image'>
                  <img
                    src={getWeatherIcon(d.icon)}
                    alt={d.icon}
                    style={{ width: '10vw' }}
                    title={d.summary}
                  />
                </figure>
              </div>
            </div>
          )}
        </footer>
      </div>
    </div>


  )
}

export default WeatherToday