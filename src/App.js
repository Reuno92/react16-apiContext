import React, { useState } from 'react';
import './App.css';
import Validation from './components/validation.components';
import Character from './components/character.components';

function App() {

  let initialValue = '';

  const [textState, changeTextState] = useState({
    input: initialValue,
    counter: initialValue.length
  });

  const counterInput = (event) => {
    changeTextState({
      input: event.target.value,
      counter: event.target.value.length
    });
  };

  return (
    <section className="container">
      <div className="form-group">
        <label htmlFor="entry">Entry :</label>
        <input id="entry" type="text"
                className="form-control bg-secondary"
              defaultValue={textState.input}
              onChange={ (e) => counterInput(e) } />
      </div>
      <Validation counter={textState.counter} min="3" max="5" />
      <Character input={textState.input} />
    </section>
  )
}

export default App;
