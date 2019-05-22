import React, { Fragment } from 'react';
import { Flex, Box, Text } from 'rebass';
import { AppBar, IconButton, Button, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LoginModal from './LoginModal';
class Appbar extends React.Component {
  state = {
    isLoginModalOpen: false,
  };

  handleLoginModalClose = () => {
    this.setState({ isLoginModalOpen: false });
  };
  render() {
    const { isLoginModalOpen } = this.state;
    return (
      <Fragment>
        <Box m={4} />
        <AppBar position="fixed" style={{ zIndex: 1221 }}>
          <Flex justifyContent="space-between" alignItems="center" mx={3} my={1}>
            <Box alignSelf="center">
              <IconButton color="inherit" aria-label="Menu" onClick={this.props.toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Text
                pl={2}
                fontSize={[3, 4]}
                fontWeight="bold"
                style={{ display: 'inline-flex', verticalAlign: 'middle' }}
              >
                Text
              </Text>
            </Box>
            <Flex justifyContent="flex-end">
              <Flex
                bg="rgba(255,255,255,0.15)"
                px={2}
                mr={2}
                width={250}
                alignItems="center"
                style={{ borderRadius: '5px' }}
              >
                <SearchIcon />
                <InputBase placeholder="Search…" style={{ color: 'white', padding: '0px' }} />
              </Flex>
              <Box>
                <Button
                  color="white"
                  onClick={() => {
                    console.log('Focus');
                    this.setState({ isLoginModalOpen: true });
                    console.log(isLoginModalOpen);
                  }}
                >
                  Login
                </Button>
                <LoginModal isOpen={isLoginModalOpen} handleClose={this.handleLoginModalClose} />
              </Box>
            </Flex>
          </Flex>
        </AppBar>
      </Fragment>
    );
  }
}
export default Appbar;
