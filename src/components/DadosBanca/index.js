import React from "react"

import Button          from '@material-ui/core/Button'
import FormGroup       from '@material-ui/core/FormGroup'
import Paper           from '@material-ui/core/Paper'
import TextField       from '@material-ui/core/TextField'
import Typograph       from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MultipleSelectName from '../MultipleSelectName';
import './DadosBanca.css'

const DadosBanca = (props) => (

  <Paper
    elevation={9}
  >
    <form 
      className='DadosBanca'
      autoComplete='off' 
    >

      <FormGroup row>
        <Typograph className="title"
          variant='display1'
        >
          Cadastro da Banca
        </Typograph>
      </FormGroup>  

      <TextField
        label='Título do TCC'
        margin='normal'
        fullWidth={true}
        required={true}
      />
        <FormControl required className='FinalPaperForm-control'>
          <InputLabel htmlFor="orientador-required">
            Local 
          </InputLabel>
          <Select
            name="age"
            inputProps={{
              id: 'orientador-required',
            }}
          >
            <MenuItem value={30}>UFSC - Jardim das Avenidas</MenuItem>
          </Select>
        </FormControl>
        <FormControl required className='FinalPaperForm-control'>
          <InputLabel htmlFor="orientador-required">
            Sala 
          </InputLabel>
          <Select
            name="age"
            inputProps={{
              id: 'orientador-required',
            }}
          >
            <MenuItem value={30}>302</MenuItem>
          </Select>
        </FormControl>
      <FormGroup row className='DadosBanca-twoColumns'>
        <TextField
        required={true}
        id="date"
        label="Data da Banca"
        type="date"
        defaultValue="2017-05-24"
        className={'bancaDate'}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </FormGroup>
      <MultipleSelectName
        names={props.usersAvailable}
        nameList={props.nameList}
        handleChange={props.handleChange}
      />
      <FormGroup row className='DadosBanca-twoColumns'>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={props.plusButton}
        >
        Enviar
        </Button> 

      </FormGroup>
    </form>
  </Paper>

)

export default DadosBanca;
