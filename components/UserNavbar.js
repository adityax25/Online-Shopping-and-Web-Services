import React,{useState,useEffect} from 'react'
import {Container, Nav,Navbar,NavDropdown,FormControl,Form,Button} from "react-bootstrap";
// import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Link from "next/link"
import classes from "./cards.module.css";
import {FaTshirt,FaLeaf } from 'react-icons/fa';
import {ImBooks } from 'react-icons/im';
import {GiDress } from 'react-icons/gi';
import {GrTechnology } from 'react-icons/gr';
import {FcHeadset,FcChargeBattery } from 'react-icons/fc';
import {IoLeaf,IoHardwareChip } from 'react-icons/io5';
import { BsFillGiftFill } from "react-icons/bs";
import { CgAppleWatch,CgSmartphoneChip } from "react-icons/cg";

function UserNavbar() {
    return (
        <div style={{paddingBottom:"1px",backgroundColor:"#18202b"}}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
            <Link href="/#home" className={classes.Link2}><Navbar.Brand style={{fontSize:"1.5rem"}}> Offer Snap</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                
                <NavDropdown title={<span><CgSmartphoneChip/> Electronics</span>} id="collasible-nav-dropdown">
                    <NavDropdown.Item><Link href="/earphones" className={classes.Link2}><a className={classes.Link2}><FcHeadset/> Earphones</a></Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link href="/smartwatch" className={classes.Link2}><a className={classes.Link2}><CgAppleWatch/> Smart Watches</a></Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link href="/powerbank" className={classes.Link2}><a className={classes.Link2}><FcChargeBattery/> Power Bank</a></Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link href="/books" className={classes.Link2}><a className={classes.Link2}><ImBooks/>Books</a></Link></Nav.Link>
                <NavDropdown title={<span><BsFillGiftFill/> Fashion</span>} id="collasible-nav-dropdown">
                <NavDropdown.Item ><Link href="/menfashion" className={classes.Link2}><a className={classes.Link2}><FaTshirt/> Men Fashion</a></Link></NavDropdown.Item>
                <NavDropdown.Item ><Link href="/womenfashion" className={classes.Link2}><a className={classes.Link2}><GiDress/> Women Fashion</a></Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link href="/beauty" className={classes.Link2}><a className={classes.Link2}><IoLeaf/>Beauty Products</a></Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
            />
            <span><pre>   </pre></span>
            <Button variant="outline-success">Search</Button>
            </Form>
            {/* <Nav.Link><Link href="/login" className={classes.Link2}><a className={classes.Link2}>Login</a></Link></Nav.Link> */}
            </Container>
            </Navbar>
        </div>
    )
}

export default UserNavbar
