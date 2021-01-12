import React, { Component } from "react";
import { Container, Navbar, NavLink, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo192.png";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Products from "../Pages/Products";

export default class Header extends Component {
	render() {
		return (
			<>
				<Navbar
					collapseOnSelect
					expand="md"
					bg="dark"
					variant="dark"
				>
					<Container>
						<Navbar.Brand href="/">
							<img
								alt="logo"
								src={logo}
								width="30"
								height="30"
								className="d-inline-block align-top"
							/>{" "}
							Home
						</Navbar.Brand>

						<Navbar.Toggle aria-controls="responsive-navbar-nav" />

						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<NavLink href="/products">Products</NavLink>
								<NavLink href="/about">About Us</NavLink>
								<NavLink href="/contacts">Contacts</NavLink>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/products" component={Products} />
						<Route exact path="/about" component={About} />
						<Route exact path="/contacts" component={Contacts} />
					</Switch>
				</Router>
			</>
		);
	}
}