import { AppBar, Avatar, Button, ButtonGroup, Grid, Theme, Toolbar } from '@mui/material';
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
    <>
      <AppBar position="sticky" style={{ boxShadow: 'inherit' }}>
        <Toolbar>
          <Avatar alt="Logo" src="/assets/dnd-icon-13.jpg" sx={{ width: 80, height: 80 }} />
          <Grid className={classes.head} container direction={'row'}>
            <ButtonGroup color="secondary" variant="contained" aria-label="outlined primary button group">
              <Grid item>
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/init">
                  <Button>Initiative Tracker</Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/rep">
                  <Button>Reputation Tracker</Button>
                </Link>
              </Grid>
            </ButtonGroup>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
