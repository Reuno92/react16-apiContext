import React, { useState } from 'react';
import './App.css';
import Validation from './components/validation.components';
import Character from './components/character.components';

function App(props) {

  let initialValue = '';
  var newString = React.createRef();

  const [textState, setTextState] = useState({
    input: initialValue,
    counter: initialValue.length
  });

  const counterInput = (event) => {
    setTextState( prevState => {
      return {
        ...prevState,
        input: event.target.value,
        counter: event.target.value.length
      }
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
      <Character input={textState.input} ref={ newString } />
    </section>
  )
}

export default App;
