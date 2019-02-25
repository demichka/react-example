import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

export default class Page2 extends React.Component {
  render(){
    return <Container className="Page2">
      <Row>
        <Col xs="12">
          <h1>Page 2</h1>
          <p>I am page 2.</p>
        </Col>
      </Row>
    </Container>
  }
}