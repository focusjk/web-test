import React, { Fragment } from 'react';
import { Flex } from 'rebass';
import Item from '../component/Item';
const mock = [
  {
    image: 'https://source.unsplash.com/random/1280x720',
    topic: 'xxxxxxxxx',
    content:
      'xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxx xxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxx',
  },
];
class Homepage extends React.Component {
  render() {
    return (
      <Fragment>
        <Item data={mock} />
        <Item data={mock} />
        <Item data={mock} />
        <Item data={mock} />
        <Item data={mock} />
        <Item data={mock} />
      </Fragment>
    );
  }
}
export default Homepage;
