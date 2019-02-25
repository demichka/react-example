import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

export default class Page3b extends React.Component {

  componentDidMount(){
    document.querySelector('.page3').classList.add('active');
  }

  componentWillUnmount(){
    document.querySelector('.page3').classList.remove('active');
  }
  
  render(){
    return <Container className="Page3b">
      <Row>
        <Col xs="12">
          <h1>Page 3b</h1>
          <p>I am page 3b.</p>
        </Col>
      </Row>
    </Container>
  }
}