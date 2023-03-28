import { Navbar, NavItem, Collapse, NavbarToggler, Nav, NavLink, NavbarBrand} from 'reactstrap'; 
import { useState } from 'react';
//import { NavLink } from 'react-router-dom';
import logo  from '../assets/logo.png'
import '../../src/App.css'


const Header = () => {

    const [navOpen, setNavbarOpen] = useState(false)

    return (
    <>
       <Navbar color='light' light role={navigator} expand='md'>
        <NavbarBrand className='p-0'>
            <img src={logo} width='400px' alt='website logo: cosmonaut cafe' className='float-start'/>
        </NavbarBrand> 
        <NavbarToggler className='ms-auto' onClick={() => setNavbarOpen(!navOpen)}/> 
            <Collapse isOpen={navOpen} navbar> 
                <Nav navbar className='ms-auto'>
                    <NavItem>
                        <NavLink className='text-dark'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-dark'>Inventory</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-dark'>Login</NavLink>
                    </NavItem>
                </Nav>
            </Collapse> 
       </Navbar>
    </>
    )
}

export default Header; 