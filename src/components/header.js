import React, { Component } from 'react';
import { Container, Navbar, NavLink, FormControl, Nav, Button, Form } from 'react-bootstrap';
import logo from './logo192.png'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img src={logo} height='30' width='30' className='d-inline-block align-top' alt='Logo' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <NavLink href='/'> Home </NavLink>
                                <NavLink href='/about'> About us </NavLink>
                                <NavLink href='/contacts'> Contacts </NavLink>
                                <NavLink href='/blog'> Blоg </NavLink>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='mr-sm-2'
                                />
                                <Button variant='outline-info'>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );

    }
}