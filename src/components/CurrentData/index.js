import React from "react"
import Paper           from '@material-ui/core/Paper'
import Typograph       from '@material-ui/core/Typography'
import './CurrentData.css'


const FinalPaperForm = (props) => (
  console.log(props.Nome),
  <Paper elevation={9} className="paper">
          <Typograph 
          variant='display1'
          className="title"
        >
          Meus Dados
        </Typograph>
        <Typograph className="title-1" component="h1" variant="title" gutterBottom>
          {props.nome.label}
        </Typograph>
        <Typograph className="subject" variant="subheading" gutterBottom>
          {props.nome.value}
        </Typograph>
        <Typograph className="title-1" component="h1" variant="title" gutterBottom>
          {props.sobrenome.label}
        </Typograph>
        <Typograph className="subject" variant="subheading" gutterBottom>
          {props.sobrenome.value}
        </Typograph>
        <Typograph className="title-1" component="h1" variant="title" gutterBottom>
          {props.email.label}
        </Typograph>
        <Typograph className="subject" variant="subheading" gutterBottom>
          {props.email.value}
        </Typograph>
        <Typograph className="title-1" component="h1" variant="title" gutterBottom>
          {props.orientador.label}
        </Typograph>
        <Typograph className="subject" variant="subheading" gutterBottom>
          {props.orientador.value}
        </Typograph>
        <Typograph className="title-1" component="h1" variant="title" gutterBottom>
          {props.coorientador.label}
        </Typograph>
        <Typograph className="subject" variant="subheading" gutterBottom>
          {props.coorientador.value}
        </Typograph>
        
  </Paper>

)

export default FinalPaperForm;
