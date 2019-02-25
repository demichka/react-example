import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

export default class Page3a extends React.Component {

  componentDidMount(){
    document.querySelector('.page3').classList.add('active');
  }

  render(){
    return <Container className="Page3a">
      <Row>
        <Col xs="12">
          <h1>Page 3a</h1>
          <p>I am page 3a.</p>
        </Col>
      </Row>
    </Container>
  }
}