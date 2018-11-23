import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: '40rem'

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  menu: {
    width: 100
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class TextFields extends React.Component {
  state = {
    name: "",
    sobrenome: "",
    senha: "",
    email:"",
    REsenha:""
  };
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
  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Título"
            className={classes.textField}
            value={this.state.name}
            onChange={this.nameChange("name")}
            margin="normal"
          />
          <TextField
            id="standard-uncontrolled"
            label="Orientador"
            value={this.state.sobrenome}
            onChange={this.sobrenomeChange("sobrenome")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-email-input"
            label="Coorientador"
            value={this.state.email}
            onChange={this.sobrenomeChange("email")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="date"
            label="Semestre"
            type="date"
            defaultValue="2017-05-10"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
        </form>
        <Button variant="contained" color="primary" onClick={this.saveData}>
          Salvar  
          <CloudUploadIcon className={classes.rightIcon} />
        </Button> 
      </div>  
      

    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
