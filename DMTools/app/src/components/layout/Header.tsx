import { AppBar, Avatar, Box, Theme, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  head: {
    height: '100%'
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.head}>
      <AppBar position="sticky" style={{ boxShadow: 'inherit' }}>
        <Toolbar variant="dense" role="navigation" >
          <Link to="/">
            <Avatar alt="Logo" src="/assets/dnd-icon-13.jpg" sx={{ width: 80, height: 80 }} />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/initiative-tracker">Initiative Tracker</Link>
          <Link to="/reputation-tracker">Reputation Tracker</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
