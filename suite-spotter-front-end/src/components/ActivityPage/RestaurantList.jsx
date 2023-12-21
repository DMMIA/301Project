
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const RestaurantList = () => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Title>Places to eat near you</Card.Title>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
export default RestaurantList;