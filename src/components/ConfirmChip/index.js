import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import './ConfirmChip.css'
function handleDelete() {
    if(x == <DoneIcon/>){
        alert("Integrante confirmado em sua banca!");
    }
    else{
        alert("Aguardando confirmação do participante!!");
    }
  }
function confirmState(y) {
    if(y == true){
        console.log('verdade');
        x = <DoneIcon fontSize="large"/>;
        color = "primary";
    }
    else if(y == false){
        x = <ClearIcon fontSize="large" />;
        color = "secondary";
    }
};
let color;
let x = <ClearIcon/>;
const ConfirmChip = (props) => ( 
    confirmState(props.condicao),
    <div className="confirmChip">
        <Chip
            avatar={<Avatar alt={props.name} src="Imagem1.png"/>}
            label= {props.name}
            clickable
            className={'chip'}
            color={color}
            onDelete={handleDelete}
            deleteIcon={x}
            variant="outlined"
        />
    </div>

  );


export default ConfirmChip;
