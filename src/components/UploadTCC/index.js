import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import './UploadTCC.css'
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class UploadTCC extends Component{

    onChange(e){
        let files= e.target.files;
        console.warn("olha o arquivinho",files);
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e)=>{
            console.warn("img data",e.target.result)
        }
    }
    render(){
        return(
      <div>
        <Dialog
            open={false}
            TransitionComponent={Transition}
            keepMounted
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">
                {"Adicionar TCC"}
            </DialogTitle>
            <DialogContent>
                <div onSubmit={this.onFormSubmit}>
                    <input type="text" class="file" name="file_info"/>
                    <div class="file_upload">
                        <input type="file" id="file_upload" name="file_upload" onChange={(e)=>this.onChange(e)}/>
                    </div>  
                </div>
            </DialogContent>
            <DialogActions>
                <Button /*onClick={""}*/ color="primary">
                    Salvar
                </Button>
                <Button /*onClick={""}*/ color="primary">
                    Descartar
                </Button>
            </DialogActions>
        </Dialog>
      </div>
    );
    }
    
}

export default UploadTCC;
