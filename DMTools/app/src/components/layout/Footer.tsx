import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    foot:{
        color: 'red'
    }
  }));

const Footer: React.FC = () => {
    const classes = useStyles();
  
    
      
    return (
      <footer className={classes.foot}>
        Footer
      </footer>
    );
  };
  
  export default Footer;