import { Grid } from '@mui/material'
import React from 'react'

const Layout = ({Children}) => {
  return (
    <div className='h-screen '>
      <Grid container>
        <Grid item xs={12} md={8} lg={5}>
          {Children}
        </Grid>
        <Grid item className='h-screen w-full' xs={0} md={4} lg={7}>
          <img src='https://media.istockphoto.com/id/1216596937/photo/portrait-of-driver-smiling.jpg?s=612x612&w=0&k=20&c=nWEvWnwYBEvLUQj24PHFjKYNZbGBpjqD04Wdw5VwSNk=' className='w-full h-full object-cover object-right-top' />
        </Grid>
      </Grid>
    </div>
  )
}

export default Layout
