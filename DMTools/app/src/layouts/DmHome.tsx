import { Box, Container } from '@mui/material';
import React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const DmHome: React.FC = (props) => {
  return (
    <Box>
      <Header />
      <Container maxWidth="xl">
        <Box component="main" flex="1 1 auto" py={4}>
          {React.Children.map(props.children, (child: any) => {
            return React.cloneElement(child);
          })}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default DmHome;
