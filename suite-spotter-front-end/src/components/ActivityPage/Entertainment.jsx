/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Entertainment = ({ entertainmentData  }) => {
  if (!entertainmentData) {
    console.log(entertainmentData, 'data inside entertainment')
    return null;
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Title>Places to visit near you</Card.Title>
        {entertainmentData && entertainmentData.map((POI, index) => (
          <ListGroup key={index}>
        <ListGroup.Item>
          Name:{POI.name}
          Type of entertainment:{POI.category}
        </ListGroup.Item>
        
      </ListGroup>
      ))}
    </Card>
  )
}

export default Entertainment;