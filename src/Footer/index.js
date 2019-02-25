import React from 'react';
import './style.scss';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

export default class Example extends React.Component {
  render(){
    return <Container fluid={true} className="Footer py-3 bg-light">
      <Row>
        <Col xs="12" md="4" className="text-center">
          Email: <a className="text-dark" href="mailto:info@us.se">info@us.se</a>
        </Col>
        <Col xs="12" md="4" className="text-center">
          Phone: +46 10-123 45 678
        </Col>
        <Col xs="12" md="4" className="text-center">
          © 2019 Us Ltd
        </Col>
      </Row>
    </Container>
  }
}