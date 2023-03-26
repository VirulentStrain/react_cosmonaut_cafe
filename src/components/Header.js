import { Navbar, NavItem, Collapse, NavbarToggler, Nav, NavLink, NavbarBrand, NavbarText } from 'reactstrap'; 
import logo from '../assets/logo.png';
import { useState } from 'react';
import '../../src/App.css'


const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
    
       <Navbar color='light' role={navigator}>
       {/* <NavbarBrand>
            <img src={logo} width='100px'/>
            <h1>Cosmonaut afe</h1>
        </NavbarBrand> */}
        {/* <NavbarToggler onClick={() => setNavbarOpen(!navbarOpen)}> */}
            {/* <Collapse isOpen={navbarOpen} navbar> */}
                <Nav navbar className='me-auto flex-row'>
                    <NavItem  className='m-1'>
                        <NavLink className='text-dark '>About</NavLink>
                    </NavItem>
                    <NavItem className='m-1'>
                        <NavLink className='link-primary'>Inventory</NavLink>
                    </NavItem>
                    <NavItem className='m-1'>
                        <NavLink className='text-dark'>Login</NavLink>
                    </NavItem>
                </Nav>
            {/* </Collapse> */}
        {/* </NavbarToggler> */}
       </Navbar>
    
    )
}

export default Header; 