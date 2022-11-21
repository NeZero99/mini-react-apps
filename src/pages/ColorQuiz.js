import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import {Link} from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function ColorQuiz() {
  const [colors, setColors] = useState([]);
  const colorIndex = useRef();
  const [messageVisible, setMessageVisible] = useState(false);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    newColors();
  }, [])

  function newColors() {
    let hex = '#'
    let colorsTemp = []
    for(let i = 1; i < 10; i++){
      let rand = Math.floor(Math.random() * 256)
      hex += rand.toString(16);
      if(i % 3 === 0) {
        colorsTemp.push(hex);
        hex = '#'
      }
    }
    setColors(colorsTemp);
    colorIndex.current = Math.floor(Math.random() * 3);
  }

  function checkColor(color) {
    if(color === colors[colorIndex.current]) {
      setMessageText('Correct!');
      newColors()
    }
    else {
      setMessageText('Wrong!');
    }
    setMessageVisible(true);
    setTimeout(() => {
      setMessageVisible(false);
    }, 1000)
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
        minWidth: 300,
        maxWidth: 600,
        width: '60%',
        height: 350,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
      }}>
        <Box sx={{
          backgroundColor: `${colors[colorIndex.current]}`,
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {messageVisible && (
            <Typography>{messageText}</Typography>
          )}
        </Box>
        <Box sx={{
          py: 1,
          display: 'flex',
          justifyContent: 'space-evenly'
        }}>
          {/* <Button onClick={newColors}>new</Button> */}
          <Button onClick={(e) => checkColor(e.target.textContent)} variant='contained'>{colors[0]}</Button>
          <Button onClick={(e) => checkColor(e.target.textContent)} variant='contained'>{colors[1]}</Button>
          <Button onClick={(e) => checkColor(e.target.textContent)} variant='contained'>{colors[2]}</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ColorQuiz