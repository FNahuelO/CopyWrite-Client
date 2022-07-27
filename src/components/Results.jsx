import React from 'react'
import { Box, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import Cancel from '../assets/Cancel';
import Check from '../assets/Check';

function Results() {
  const texts = useSelector(state => state.texts.reverse())
  return (
    <Container maxWidth="md" sx={{
      display: 'flex',
      background: 'white',
      height: '70%',
      padding: '1.5rem !important'
  }}>
      <Box sx={{
        width: '20%',
        textAlign: 'center',
        fontWeight: 500
      }}>
        RESULTS:
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column',width: '60%', gap: '1rem',overflowY: 'auto'}}>
        {
          React.Children.toArray(
            texts?.map((txt) => {
              return <Box sx={{
                border: '1px solid black',
                borderRadius: '5px',
                background: 'white',
                padding: '0.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span>Text: {txt.text}</span> <span style={{ display: 'flex', alignItems: 'center', width: '30%', justifyContent: 'space-evenly' }}>Palindrome: {txt.palindrome ? <Check /> : <Cancel />}</span>
              </Box>;
            })
          )
        }
      </Box>
  </Container>
  )
}

export default Results