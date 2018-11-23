import React  from 'react';

import Avatar       from '@material-ui/core/Avatar';
import Divider      from '@material-ui/core/Divider';
import Drawer       from '@material-ui/core/Drawer';
import List         from '@material-ui/core/List';
import ListItem     from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography   from '@material-ui/core/Typography';

import './Sidebar.css';


const TemporaryDrawer = (props) => {

    return (
      <Drawer 
        open={props.collapsed} 
        onClose={props.collapseSidebar}
      >
        <div className="Profile">
          <Avatar
            alt={props.profileName}
            src={props.profilePicture}
            className="Profile-picture"
          />
          
          <Typography 
            variant="title"
            className="Profile-name"
          >
            {props.profileName}
          </Typography>

          <Typography 
            variant="body1"
            className="Profile-email"
          >
            {props.profileEmail}
          </Typography>

        </div>
        <div className="lala" >
                  <Divider />
        <List>
          {props.menu.map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </div>

      </Drawer>
    
  );
}

export default TemporaryDrawer;