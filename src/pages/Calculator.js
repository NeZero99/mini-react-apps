import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import { useState, useRef } from 'react';

function Calculator() {
  const newCalc = useRef(true);
  const [display, setDisplay] = useState('0');

  function showOnDisplay(input) {
    if(display.length === 13) return;//max length
    if(newCalc.current === true) {//new calculation
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
    setDisplay('0');
  }

  function lastClear() {
    if(display.length === 1){
      newCalc.current = true;
      setDisplay('0');
    }
    else setDisplay((prev) => prev.slice(0, prev.length - 1));
  }

  return (
    <Box sx={{
      backgroundColor: 'grey',
      height: '100vh',
      display: 'flex',
      justifyContent: 'Center',
      alignItems: 'center'
    }}>
      <Box sx={{
        backgroundColor: 'black',
        width: 400,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}>
        <Typography color='white' align='right' variant='h3' sx={{mr: 4}}>{display}</Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)'
        }}>
          <Button size='large' onClick={allClear}>AC</Button>
          <Button size='large' onClick={lastClear}>C</Button>
          <Button size='large'>%</Button>
          <Button size='large'>/</Button>
          <Button size='large' onClick={() => showOnDisplay('7')}>7</Button>
          <Button size='large' onClick={() => showOnDisplay('8')}>8</Button>
          <Button size='large' onClick={() => showOnDisplay('9')}>9</Button>
          <Button size='large'>*</Button>
          <Button size='large' onClick={() => showOnDisplay('4')}>4</Button>
          <Button size='large' onClick={() => showOnDisplay('5')}>5</Button>
          <Button size='large' onClick={() => showOnDisplay('6')}>6</Button>
          <Button size='large'>-</Button>
          <Button size='large' onClick={() => showOnDisplay('1')}>1</Button>
          <Button size='large' onClick={() => showOnDisplay('2')}>2</Button>
          <Button size='large' onClick={() => showOnDisplay('3')}>3</Button>
          <Button size='large'>+</Button>
          <Button size='large' sx={{gridColumn: 'span 2'}} onClick={() => showOnDisplay('0')}>0</Button>
          <Button size='large' onClick={() => showOnDisplay(',')}>,</Button>
          <Button size='large'>=</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Calculator