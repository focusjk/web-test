import React, { Fragment } from 'react';
import { Flex, Box, Image, Text, Button } from 'rebass';
import { Divider } from '@material-ui/core';

class Itempage extends React.Component {
  state = {
    isDrawerOpen: false,
  };

  toggleDrawer = () => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  };

  render() {
    return (
      <Flex flexWrap="wrap">
        <Flex flexDirection="column" width={[1, 1, 1 / 2]} pr={3}>
          <Box mb={2} height="100px">
            <Image src="https://source.unsplash.com/random/1280x720" />
          </Box>
          <Flex style={{ overflow: 'scroll' }}>
            <Image mr={2} height={100} src="https://source.unsplash.com/random/1280x720" />
            <Image mr={2} height={100} src="https://source.unsplash.com/random/1280x720" />
            <Image mr={2} height={100} src="https://source.unsplash.com/random/1280x720" />
            <Image mr={2} height={100} src="https://source.unsplash.com/random/1280x720" />
          </Flex>
        </Flex>

        <Flex width={[1, 1, 1 / 2]} py={3} flexDirection="column" justifyContent="space-between">
          <Flex width={1} flexWrap="wrap">
            <Text width={1 / 2} fontSize={[3, 4, 5]} fontWeight="bold">
              Topic
            </Text>
            <Text width={1 / 2} fontSize={[3, 4, 5]} fontWeight="bold" textAlign="right">
              100 baht
            </Text>
            <Box width={1} my={2} style={{ borderBottom: '1px solid black ' }} />
            <Text width={1} fontSize={3} style={{ wordWrap: 'break-word', overflow: 'hidden' }}>
              XXxXXXXXXXXxXXXXXXXXxXXXXXXXXxXXXXXXXXdsfsdfsdfsfsdfsdsfsdfsfsdfsdffsdfsdfdsfdfdsfdsfsdfsdfsdfd
            </Text>
          </Flex>
          <Flex width={1} flexWrap="wrap">
            <Button bg="magenta">focus</Button>
            <Button bg="magenta">focus</Button>
            <Button bg="magenta">focus</Button>
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default Itempage;
