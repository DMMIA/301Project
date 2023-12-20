import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Entertainment = ({  }) => {
  if (!entertainmentData) {
    return null;
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Title>Places to eat near you</Card.Title>
      <ListGroup>
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default Entertainment;