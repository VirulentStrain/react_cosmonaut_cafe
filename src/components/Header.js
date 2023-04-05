import { Navbar, NavItem, Collapse, NavbarToggler, Nav, NavbarBrand} from 'reactstrap'; 
import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import logo  from '../assets/logo.png'
import '../../src/App.css'


const Header = () => {

    const [navOpen, setNavbarOpen] = useState(false)

    return (
    <>
       <Navbar color='light' sticky='top' light role={navigator} expand='md'>
        <NavbarBrand className='p-0'>
            <NavLink to='/'>
                <img src={logo} width='300px' className='mb-4' alt='website logo: cosmonaut cafe'/>
            </NavLink>
        </NavbarBrand> 
        <NavbarToggler className='ms-auto' onClick={() => setNavbarOpen(!navOpen)}/> 
            <Collapse isOpen={navOpen} navbar> 
                <Nav navbar className='ms-auto'>
                    <NavItem>
                        <NavLink className='nav-link customN' to='/about' >About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link customN' to='/inventory' >Inventory</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link customN' to='/contact' >Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse> 
       </Navbar>
    </>
    )
}

export default Header; 