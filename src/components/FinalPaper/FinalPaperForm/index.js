import React from "react"

import AddIcon         from '@material-ui/icons/Add';
import Button          from '@material-ui/core/Button'
import FormGroup       from '@material-ui/core/FormGroup'
import Paper           from '@material-ui/core/Paper'
import TextField       from '@material-ui/core/TextField'
import Typograph       from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './FinalPaperForm.css';

const FinalPaperForm = (props) => (

  <Paper
    elevation={9}
  >
    <form 
      className='FinalPaperForm'
      autoComplete='off' 
    >

      <FormGroup row>
        <Typograph className="title"
          variant='display1'
        >
          Cadastro de TCC
        </Typograph>
      </FormGroup>  

      <TextField
        label='Título'
        margin='normal'
        fullWidth={true}
        required={true}
      />
        
      <FormGroup row className='FinalPaperForm-twoColumns'>
        
        <FormControl required className='FinalPaperForm-control'>
          <InputLabel htmlFor="orientador-required">
            Orientador
          </InputLabel>
          <Select
            name="age"
            inputProps={{
              id: 'orientador-required',
            }}
          >
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Obrigatório</FormHelperText>
        </FormControl>

        <FormControl required className='FinalPaperForm-control'>
          <InputLabel htmlFor="coorientador-required">
            Coorientador
          </InputLabel>
          <Select
            name="age"
            inputProps={{
              id: 'coorientador-required',
            }}
          >
          </Select>
          <FormHelperText>Obrigatório</FormHelperText>
        </FormControl>
        
      </FormGroup>

      <FormGroup row className='FinalPaperForm-twoColumns'>
        <Button 
          variant="fab" 
          color="secondary" 
          aria-label="Add"
          onClick={props.plusButton}
        >
            <AddIcon />
        </Button>
        
        <Button 
          variant="contained" 
          color="primary" 
          onClick={props.submitButton}
        >
          Enviar  
        </Button> 

      </FormGroup>


    </form>
  </Paper>

)

export default FinalPaperForm;
