import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Tabs,
  Tab,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  InputBase,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Appbar from './component/Appbar';
import Homepage from './page/Homepage';
import Itempage from './page/Itempage';
import './App.css';

class App extends React.Component {
  state = {
    isDrawerOpen: false,
  };

  toggleDrawer = () => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  };

  render() {
    const { isDrawerOpen } = this.state;
    return (
      <Router>
        <Flex flexWrap="wrap">
          <Appbar toggleDrawer={this.toggleDrawer} />

          <Drawer variant="persistent" anchor="left" open={isDrawerOpen}>
            <Box m={4} />
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <MenuIcon /> : <MenuIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>
          <Flex mx={[3, 6]} mt={4} flexWrap="wrap">
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Itempage} />
            <Route path="/focus" component={Itempage} />
          </Flex>
        </Flex>
      </Router>
    );
  }
}
function Home() {
  return <h2>Home</h2>;
}

export default App;
