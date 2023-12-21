/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Entertainment = ({ entertainment }) => {
  if (!entertainment) {
    console.log(entertainment, 'data inside entertainment')
    return null;
  }
  return (
    <>
    
      <Card style={{ width: '16rem' }}>
      <Card.Title>{entertainment.category}
        </Card.Title>
        <ListGroup.Item >
          Name:{entertainment.name} 
          </ListGroup.Item>
        
      </Card>
     
    </>
  )
}

export default Entertainment;