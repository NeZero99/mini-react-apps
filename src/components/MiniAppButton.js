import {
    Box,
    Typography,
} from '@mui/material';
import {Link} from 'react-router-dom';

function MiniAppButton({ name, destination }) {
  return (
    <Box sx={{
        minWidth: 100,
        mx: 1,
        height: 70,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'end',
        textDecoration: 'none',
        backgroundColor: 'primary.main',
        '&:hover': {
            backgroundColor: 'primary.dark'
        },
    }}
    component={Link}
    to={destination}>
        <Typography sx={{
            mx: 2,
            mb: 0.5,
            color: 'black',
        }}>{name}</Typography>
    </Box>
  )
}

export default MiniAppButton