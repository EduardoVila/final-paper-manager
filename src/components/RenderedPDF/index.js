import React           from "react"
import Paper           from '@material-ui/core/Paper'
import Typograph       from '@material-ui/core/Typography'
import './RenderedPDF.css'
const RenderedPDF = (props) => (
    <Paper elevation={9} className="paper-1">
          <Typograph 
          variant='display1'
          className="title"
        >
          {props.title}
          </Typograph>
          <object className="renderedPDF"  data={props.pdfURL}>Você ainda não possui TCC</object>
  </Paper>
)

export default RenderedPDF;
