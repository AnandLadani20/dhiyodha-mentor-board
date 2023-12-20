import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import DhiyodhaMainLogo from '../files/logo/Dhiyodha.png' 

const Header = () => {
  return (
    <>
      <Container maxWidth>
        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          py={1}
        >
           <Grid item>
              <IconButton color='primary'>
                 <img src={DhiyodhaMainLogo} height={90} alt='dhiyodha-logo' />
                 <Box>
                 <Typography variant='h5' sx={{fontWeight:"700"}}>Dhiyodha</Typography>
                 <Typography variant='h5' sx={{fontWeight:"700"}}>MentorBoard</Typography>
                 </Box>
              </IconButton>
           </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Header