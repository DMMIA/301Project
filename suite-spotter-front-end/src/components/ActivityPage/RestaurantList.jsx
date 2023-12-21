/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const RestaurantList = ({ restaurant }) => {
  if(!restaurant) {
    
    return null;
   
  }
  return (
    <>
    <Card style={{ width: '16rem' }}>
      <ListGroup>
        <ListGroup.Item>Name:{restaurant.name}</ListGroup.Item>
      </ListGroup>
      
    </Card>
    </>
  );
}
export default RestaurantList;
