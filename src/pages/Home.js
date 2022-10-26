import {
  Container,
  Box,
  Button,
} from '@mui/material';
import MiniAppButton from '../components/MiniAppButton';

function Home() {
  return (
    <Box sx={{
      backgroundColor: 'grey',
      height: '100vh',
      display: 'flex',
      justifyContent: 'Center',
      alignItems: 'center'
    }}>
      <Box sx={{
        maxWidth: 700,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <MiniAppButton name='Calculator' destination='/calculator'/>
      </Box>
    </Box>
  )
}

export default Home