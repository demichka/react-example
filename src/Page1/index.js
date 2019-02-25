import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

export default class Page1 extends React.Component {

  buttonText = 'Show more';

  coolThingsToShow = [];

  showMore(){
    this.buttonText = this.buttonText === 'Show more' ? 'Show less' : 'Show more';
    this.coolThingsToShow = this.buttonText === 'Show less' ? [
      'Livet är gött',
      'Världen är stor',
      'Jag och min bror'
    ] : [];
    this.rerender();
  }

  rerender(){
    this.setState({ state: this.state });
  }

  render(){
    return <Container className="Page1">
      <Row>
        <Col xs="12">
          <h1>Page 1</h1>
          <p>I am page 1.</p>
          <Button color="primary" onClick={e => this.showMore(e)}>{this.buttonText}</Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs="12">
          {this.coolThingsToShow.map((value, index) => {
            return <p key={index}>{value}</p>
          })}
        </Col>
      </Row>
    </Container>
  }
}