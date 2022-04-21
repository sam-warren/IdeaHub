import { AppBar, IconButton, Theme, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme: Theme) => ({}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar
        style={{
          position: 'relative',
          minHeight: '50px',
          maxHeight: '150px',
          fontSize: '1.5rem',
          justifyContent: 'flex-start'
        }}>
        <Box mr={2}>track this project on </Box>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          href="https://github.com/sam-warren/IdeaHub/tree/main/DMTools"
          target="_blank">
          <GitHubIcon style={{ color: '#fff' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
