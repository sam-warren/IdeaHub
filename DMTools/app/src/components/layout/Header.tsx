import { AppBar, Avatar, Box, Divider, IconButton, Menu, MenuItem, Theme, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  head: {
    height: '100%'
  },
  mainNavToolbar: {
    '& a': {
      display: 'block',
      padding: 2,
      color: 'inherit',
      fontSize: '1.6rem',
      textDecoration: 'none'
    },
    '& a:hover': {
      textDecoration: 'underline'
    },
    '& a:first-child': {
      marginLeft: -2
    }
  },
  menuDecorator: {
    color: 'black',
    textDecoration: 'none'
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none'
  };

  return (
    <Box className={classes.head}>
      <AppBar position="sticky" style={{ boxShadow: 'inherit' }}>
        <Toolbar variant="regular" className={classes.mainNavToolbar} role="navigation">
          <Link to="/" style={linkStyle}>
            <Typography variant="h3" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
              DMTools
            </Typography>
          </Link>
          <Box px={1}>
            <Divider orientation="vertical" />
          </Box>
          <Link to="/initiative-tracker" style={linkStyle}>
            initiative tracker
          </Link>
          <Box px={1}>
            <Divider orientation="vertical" />
          </Box>
          <Box>
            <Link to="/reputation-tracker" style={linkStyle}>
              reputation tracker
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Divider orientation="vertical" />
          </Box>
          <Box>
            <IconButton onClick={handleOpenNavMenu} sx={{ p: 0 }}>
              <Avatar alt="d20" src="/assets/dnd-icon-13.jpg" />
            </IconButton>
            <Menu
              sx={{ mt: '45px', color: 'white' }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}>
              <Link to="/" className={classes.menuDecorator}>
                <MenuItem key="home" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link to="/initiative-tracker" className={classes.menuDecorator}>
                <MenuItem key="initiative-tracker" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Initiative Tracker</Typography>
                </MenuItem>
              </Link>
              <Link to="/reputation-tracker" className={classes.menuDecorator}>
                <MenuItem key="reputation-tracker" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Reputation Tracker</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
