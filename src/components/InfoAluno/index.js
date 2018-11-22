import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400
  },
  menu: {
    width: 200
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
    name: "name",
    sobrenome: "sobrenome",
    senha: "senha"
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
    console.log(this.state.senha);
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Nome"
            className={classes.textField}
            value={this.state.name}
            onChange={this.nameChange("name")}
            margin="normal"
          />
          <TextField
            id="standard-uncontrolled"
            label="Sobrenome"
            value={this.state.sobrenome}
            onChange={this.sobrenomeChange("sobrenome")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-password-input"
            label="Senha"
            value={this.state.senha}
            className={classes.textField}
            onChange={this.passwordChange("senha")}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
          <TextField
            id="standard-read-only-input"
            label="Email"
            defaultValue=""
            className={classes.textField}
            margin="normal"
          />
        </form>
        <Button variant="contained" color="primary" className={classes.button} onClick={console.log(this.state)}>
          Salvar  
          <CloudUploadIcon className={classes.rightIcon}/>
        </Button> 
      </div>  
      

    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
