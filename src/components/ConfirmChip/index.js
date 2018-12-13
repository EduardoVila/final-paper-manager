import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import './ConfirmChip.css'

const ConfirmChip = (props) => ( 
    <div className="confirmChip">
        <Chip
            avatar={<Avatar alt={props.name} src="Imagem1.png"/>}
            label= {props.name}
            className={'chip'}
            color={
                props.condicao? 'primary' :'secondary'
            }
            deleteIcon={
                props.condicao? <DoneIcon fontSize="large"/> : <ClearIcon fontSize="large" />
            }
            variant="outlined"
        />
    </div>

  );


export default ConfirmChip;
