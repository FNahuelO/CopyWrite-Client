import React from 'react';
import Results from './Results'
import { Container, Box, TextField, Button, Typography } from '@mui/material'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reverseText } from '../redux/action';

function Home() {
    const [text , setText] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        dispatch(reverseText(text))
    }
  return (
    <Container maxWidth="full" sx={{
        background: '#282626',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
        padding: '0 !important'
    }}>
        <Box sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        background: 'white',
        padding: '1rem 0',
        alignItems: 'center',
        gap: '2rem'
    }}>
        <Typography variant="h5" sx={{margin: '0 3rem'}}>REVERSE TEXT</Typography>
        <TextField id="outlined-basic" label="Insert text" variant="outlined" size='small' sx={{background: 'white', width: '50%'}} onChange={(e) => handleChange(e)} />
        <Button variant="outlined" sx={{
            padding: '7px 15px',
            color: 'black',
            border: '1px solid black'
        }} onClick={(e) => handleSubmit(e)}>SEND</Button>
        </Box>
        <Results />
    </Container>
  )
}

export default Home