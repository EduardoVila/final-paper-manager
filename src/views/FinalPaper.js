import React, {Component} from 'react'

import Dashboard      from '../layout/Dashboard'
import Grid           from '@material-ui/core/Grid'
import FinalPaperForm from '../components/FinalPaper/FinalPaperForm'
import Modal          from '../components/Modal'
import UploadInput    from '../components/FinalPaper/FinalPaperUpload'
import RenderedPDF from '../components/RenderedPDF'
class FinalPaper extends Component {
    state = {
        student: {
            name:      '',
            sobrenome: '',
            senha:     '',
            email:     '',
            resenha:   '',
            tcc: ''
        },
        modal: {
            visible: false
        },
        TCC:{
            title: 'Meu TCC',
            pdfURL:'./lala.pdf'
        }
    };

    openModalHandler = () => {
        let currentState = this.state.modal
        currentState.visible = true
        this.setState({
            modal: currentState
        })
    };

    closeModalHandler = () => {
        let currentState = this.state.modal
        currentState.visible = false
        this.setState({
            modal: currentState
        })
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

    uploadHandler = (e) => {
        let reader = new FileReader();
        let files = e.target.files[0];
        let currentValue = this.state.student;
        
        currentValue.tcc = files.name;
        this.setState({
            student: currentValue
        })

        //console.warn("olha o arquivinho",files);
        
        reader.readAsDataURL(files);

        reader.onload = (e)=>{
            //console.warn("img data",e.target.result)
        }
    };

    render() {
        return (
            <Dashboard>

                <Grid item xs={12} md={6}>
                    <FinalPaperForm
                        plusButton={this.openModalHandler}
                        submitButton={this.openModalHandler}
                    />
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <RenderedPDF {...this.state.TCC}></RenderedPDF>
                </Grid>
                
                <Modal
                    visible={this.state.modal.visible}
                    title="Upload do TCC"
                    btnLeft="Cancelar"
                    btnRight="Enviar"
                    btnLeftFunction={this.closeModalHandler}
                >
                    <UploadInput
                        imageValue={this.state.student.tcc}
                        onChange={this.uploadHandler}
                    />
                </Modal>
            </Dashboard>
        );
    }

};
  
export default FinalPaper;