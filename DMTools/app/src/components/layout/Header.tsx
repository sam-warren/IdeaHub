import { AppBar, Button, Theme, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  head: {
    color: 'blue'
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" style={{ boxShadow: 'none' }}>
        <Toolbar className={classes.head}>
          <Box>
            <Link to="/">
              <Button color="secondary" variant="contained">
                Home
              </Button>
            </Link>
            <Link to="/init">
              <Button color="secondary" variant="contained">
                Initiative Tracker
              </Button>
            </Link>
            <Link to="/rep">
              <Button color="secondary" variant="contained">
                Reputation Tracker
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
