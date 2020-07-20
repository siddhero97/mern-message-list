import React, {Component} from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css"
class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () =>  {
        this.setState({
                isOpen: !this.state.isOpen
            });
    };

    render() {
        return (
            <div>
                <Navbar color = "dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">MessageList</NavbarBrand>
                        <NavbarBrand onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav class="ml-auto" navbar></Nav>
                            <NavItem>
                                <NavLink href="https://discord.gg/y6jaKm">Discord</NavLink>
                            </NavItem>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
            );

    }
}

export default  AppNavbar;