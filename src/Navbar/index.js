/* This is basically copied from 
https://reactstrap.github.io/components/navbar/ */

import React from 'react';
import { withRouter, NavLink} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class AppNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">React Example</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" exact to="/" activeClassName="active">Page 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/page2" activeClassName="active">Page 2</NavLink>
                <NavLink className="nav-link" to="/page4" activeClassName="active">Page 4</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="page3">
                  Page 3
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink className="nav-link" to="/page3a" activeClassName="active">Page 3a</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className="nav-link" to="/page3b" activeClassName="active">Page 3b</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(AppNavbar);