import React from 'react';
import Navigation from './components/Navigation'
import 'bulma/css/bulma.css'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <header className='hero is-info is-bold is-large'>
        <nav className='hero-header'>
          <Navigation />
        </nav>
        <main className='hero-body has-text-centered'>hero body</main>
        <section className='hero-foot has-text-centered'>hero footer</section>
      </header>
      <footer className='footer has-text-centered'>footer</footer>
    </React.Fragment>
  );
}

export default App;
