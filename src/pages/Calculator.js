import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import { useState, useRef } from 'react';
import {Link} from 'react-router-dom';

function Calculator() {
  const newCalc = useRef(true);
  const calculation = useRef();
  const [display, setDisplay] = useState('0');

  function showNumber(input) {
    if(display.length === 13) return;//max length
    if(newCalc.current === true) {//new numbers on display
      if(input === '0' || input === ',') return;//no zeros or commas at the start
      setDisplay(input);
      newCalc.current = false;
    }
    else{
      if(input === ',' && display.includes(',')) return;//no more than one comma
      setDisplay((prev) => prev + input);
    }
  }

  function allClear() {
    newCalc.current = true;
    calculation.current = null;
    setDisplay('0');
  }

  function lastClear() {
    if(display.length === 1) {
      newCalc.current = true;
      setDisplay('0');
    }
    else setDisplay((prev) => prev.slice(0, prev.length - 1));
  }

  function showOperation(operation) {
    let numberToCalculate;
    if(!calculation.current) numberToCalculate = Number(display);
    else numberToCalculate = calculation.current(Number(display));
    calculation.current = startCalculation(numberToCalculate, operation);
    newCalc.current = true;
  }

  function equal() {
    if(!calculation.current) return;
    setDisplay((prev) => {
      let res = calculation.current(Number(prev));
      if(res.toString().length >= 13) return res.toFixed(12);
      if(isNaN(res)) return res.toString();
      return res;
    })
    calculation.current = null;
    newCalc.current = true;
  }

  function startCalculation(number1, operation){
    return function calculate(number2) {
      switch(operation){
        case '+':
          return number1 + number2;
        case '-':
          return number1 - number2;
        case '*':
          return number1 * number2;
        case '/':
          return number1 / number2;
        default:
          return number2;
      }
    }
  }

  const borderRightRadius = {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  }

  return (
    <Box sx={{
      backgroundColor: '#21262b',
      height: '100vh',
      display: 'flex',
      justifyContent: 'Center',
      alignItems: 'center'
    }}>
      <Button component={Link} to={'/'} variant='outlined' color='warning' sx={{position: 'absolute', top: 20, left: 20 }}>Home</Button>
      <Box sx={{
        backgroundColor: 'black',
        borderRadius: 8,
        width: 400,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        <Typography color='white' align='right' variant='h3' sx={{mr: 4}}>{display}</Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)'
        }}>
          <Button size='large' color='error' variant='outlined' sx={{gridColumn: 'span 2'}} onClick={allClear}>AC</Button>
          <Button size='large' color='error' variant='outlined' onClick={lastClear}>C</Button>
          <Button size='large' variant='contained' sx={borderRightRadius} onClick={() => showOperation('/')}>/</Button>
          <Button size='large' onClick={() => showNumber('7')}>7</Button>
          <Button size='large' onClick={() => showNumber('8')}>8</Button>
          <Button size='large' onClick={() => showNumber('9')}>9</Button>
          <Button size='large' variant='contained' sx={borderRightRadius} onClick={() => showOperation('*')}>*</Button>
          <Button size='large' onClick={() => showNumber('4')}>4</Button>
          <Button size='large' onClick={() => showNumber('5')}>5</Button>
          <Button size='large' onClick={() => showNumber('6')}>6</Button>
          <Button size='large' variant='contained' sx={borderRightRadius} onClick={() => showOperation('-')}>-</Button>
          <Button size='large' onClick={() => showNumber('1')}>1</Button>
          <Button size='large' onClick={() => showNumber('2')}>2</Button>
          <Button size='large' onClick={() => showNumber('3')}>3</Button>
          <Button size='large' variant='contained' sx={borderRightRadius} onClick={() => showOperation('+')}>+</Button>
          <Button size='large' sx={{
            gridColumn: 'span 2',
            borderBottomLeftRadius: 30,
          }} variant='outlined' onClick={() => showNumber('0')}>0</Button>
          <Button size='large' variant='outlined' onClick={() => showNumber('.')}>.</Button>
          <Button size='large' color='success' variant='contained' sx={{
            borderTopRightRadius: 0,
          }} onClick={equal}>=</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Calculator