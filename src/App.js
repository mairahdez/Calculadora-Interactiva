import './App.css';
import freeCodeCamp from '../src/img/freeCodeCampLogo.png'
import AppHeader from './components/AppHeader';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate, format } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = (val) => {
    setInput(input + val);
  };

  /*const calculateResult = () => {
    if (input) {
        setInput(evaluate(input));
    } else {
      alert("Please enter values to perform the calculations");
    }*/
    //modificacion para eliminar entrada automaticamente
    //en caso de error.
    const calculateResult = () => {
      try {
        const result = evaluate(input);
        setInput(format(result, { precision: 14 })); // Formatea el resultado
      } catch (error) {
        alert('La expresión matemática es incorrecta');
        setInput(''); // Borra la entrada si hay un error
      }
   
  };

  return (
    <div>
      <AppHeader>
        <img
        src={freeCodeCamp}
        className='fcc-logo'
        alt='Logo freeCodeCamp'
        />
        </AppHeader>
        <div className='outer-container'>
        <h1 className='title'>Maira Hernandez</h1>
          <div className='calc-container'>
            <Screen input={input} />
        <div className='row'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manageClick={calculateResult}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>  
        </div>
        
        <div className='row'>
          <ClearButton manageClear={() => setInput('')}>
            Clear
            </ClearButton>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
