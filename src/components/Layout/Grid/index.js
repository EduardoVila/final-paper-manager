import React from 'react'
import Grid from '@material-ui/core/Grid'
import './Grid.css'

const grid = (props) => (
    <Grid className='Grid'
        container 
        justify='center' 
        spacing={24} 
        alignItems='center' 
        wrap='wrap'
    >
        {props.children}
        
    </Grid>
)

export default grid