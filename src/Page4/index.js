import React from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem
  // Button
} from 'reactstrap';





export default class Page4 extends React.Component {

  animals = [];

  createList() {
    this.animals = ['katt', 'hamster', 'kanin', 'hund'];
  }

  render() {
    
    return <Container className="Page4">
    <Row>
      <Col sm="8">
        <h1>I am page 4</h1>
        {this.createList()}
        <ListGroup>
        {this.animals.map((animal, index) => {
          console.log(animal);
            return <ListGroupItem key={index}>{animal.toUpperCase()}</ListGroupItem>
          })}
        </ListGroup>
      </Col>
    </Row>
  </Container>
      
  }
}
