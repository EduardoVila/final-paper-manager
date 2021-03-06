import React from "react"
import Button          from '@material-ui/core/Button'
import FormGroup       from '@material-ui/core/FormGroup'
import Paper           from '@material-ui/core/Paper'
import TextField       from '@material-ui/core/TextField'
import Typograph       from '@material-ui/core/Typography'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './Dadosusu.css'

/*
  saveData = event => {
    console.log(this.state);
  };
  nameChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  sobrenomeChange = sobrenome => event => {
    this.setState({
      [sobrenome]: event.target.value,
    });
  };
  passwordChange = senha => event => {
    this.setState({
      [senha]: event.target.value,
    });
  };
*/
const DadosUsu = (props) => (
  
  <Paper
    elevation={9}
  >
    <form 
      className='DadosUsu'
      autoComplete='off' 
    >
      <FormGroup row>
        <Typograph 
          variant='display1'
        >
          Atualizar Dados
        </Typograph>
      </FormGroup>  
      <FormGroup row className='DadosUsu-twoColumns'>
      <TextField
            id="standard-name"
            label="Nome"
            className={'textField'}
            value={""}
            //onChange={this.nameChange("name")}
            margin="normal"
            fullWidth='true'
            required='true'
          />
          <TextField
            id="standard-uncontrolled"
            label="Sobrenome"
            value={""}
            //onChange={this.sobrenomeChange("sobrenome")}
            className={'textField'}
            margin="normal"
            fullWidth='true'
            required='true'
          />
          <TextField
            id="standard-email-input"
            label="Email"
            value={""}
            //onChange={this.sobrenomeChange("email")}
            className={'textField'}
            margin="normal"
            fullWidth='true'
            required='true'
          />
          <TextField
            id="standard-password-input"
            label="Senha Atual"
            value={""}
            className={'textField'}
            //onChange={this.passwordChange("senha")}
            type="password"
            autoComplete="current-password"
            margin="normal"
            fullWidth='true'
            required='true'
          />
          <TextField
            id="standard-new-password-input"
            label="Nova Senha"
            value={""}
            className={'textField'}
            //onChange={this.passwordChange("REsenha")}
            type="password"
            autoComplete="current-password"
            margin="normal"
            fullWidth='true'
            required='true'
          />
      </FormGroup>
      <FormGroup row className='DadosUsu-twoColumns'>
      <Button variant="contained" color="primary" /*onClick={this.saveData}*/>
          Salvar Dados
          <CloudUploadIcon className={'rightIcon'} />
        </Button> 
      </FormGroup>
    </form>
  </Paper>

)

export default DadosUsu;
