/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const RestaurantList = ({restaurantData}) => {
  if(!restaurantData) {
    console.log(restaurantData, 'data inside restaurantlist')
    return null;
    
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Title>Places to eat near you</Card.Title>
      {restaurantData && restaurantData.map((restaurant, index) => (
      <ListGroup key={index}>
        <ListGroup.Item>Name:{restaurant.name}</ListGroup.Item>
      </ListGroup>
       ))}
    </Card>
  );
}
export default RestaurantList;
