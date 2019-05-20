import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <header>
        <div>Header</div>
      </header>
      <nav>
        <div>Nav</div>
      </nav>
      <main>
        <div>Main</div>
        <section>
          <div>Section</div>
        </section>
      </main>
      <footer>
        <div>Footer</div>
      </footer>
    </React.Fragment>
  );
}

export default App;
