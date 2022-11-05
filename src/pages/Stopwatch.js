import {
  Box,
  Typography,
  Button,
  ButtonGroup,
} from '@mui/material';
import {Link} from 'react-router-dom';
import {useRef, useState} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Stopwatch() {
  const stopWatchId = useRef();
  const [hundreads, setHundreads] = useState(0);

  function start() {
    if(!stopWatchId.current){
      stopWatchId.current = setInterval(() => {
        setHundreads((prevH) => ++prevH);
      }, 10);
    }
  }

  function stop() {
    clearInterval(stopWatchId.current);
    stopWatchId.current = null;
  }

  function reset() {
    stop();
    setHundreads(0);
  }

  const fontTheme = createTheme({
    typography: {
      fontFamily: [
        'Major Mono Display',
        'monospace'
      ].join(','),
    },
  });

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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <ThemeProvider theme={fontTheme}>
          <Typography variant='h1' color='white'>
            {Math.floor((hundreads / 100) / 60).toLocaleString(undefined, {minimumIntegerDigits: 2})}:
            {Math.floor((hundreads / 100) % 60).toLocaleString(undefined, {minimumIntegerDigits: 2})}:
            {hundreads.toLocaleString(undefined, {minimumIntegerDigits: 2}).slice(-2)}
          </Typography>
        </ThemeProvider>
        <ButtonGroup sx={{mt: 2}} variant="contained" aria-label="outlined primary button group">
          <Button onClick={start}>Start</Button>
          <Button onClick={stop}>Stop</Button>
          <Button onClick={reset}>Reset</Button>
        </ButtonGroup>
      </Box>
    </Box>
  )
}

export default Stopwatch