import { useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBBadge
} from 'mdb-react-ui-kit';
// this is to prevent errors. We will need to add logic to the Nav for login
//true represents a logged in user
// false is logged out.
const auth = false

export default function Nav() {
    const [showNavSecond, setShowNavSecond] = useState(false);
  // function 
    function showNavigation() {
      if (auth) {
        return (
          <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
              <MDBNavbarBrand href='/'>Living Lend</MDBNavbarBrand>
              <MDBNavbarToggler
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowNavSecond(!showNavSecond)}
              >
                <MDBIcon icon='bars' fas />
              </MDBNavbarToggler>
              <MDBCollapse navbar show={showNavSecond}>
                <MDBNavbarNav>
                  <MDBNavbarLink active aria-current='page' href='/'>
                    Home
                  </MDBNavbarLink>
                  <MDBNavbarLink href='/products'>Products</MDBNavbarLink>
                  <MDBNavbarLink href='/orderhistory'>Order History</MDBNavbarLink>
                  <MDBNavbarLink href='/logout'>Logout</MDBNavbarLink>
                  <MDBNavbarItem >
                    <MDBNavbarLink href='#cart'>
                      <MDBBadge pill color='danger'>0</MDBBadge>
                      <span >
                        <MDBIcon fas icon='shopping-cart'></MDBIcon>
                      </span>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        );
      } else {
        return (
          <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
              <MDBNavbarBrand href='/home'>Living Lend</MDBNavbarBrand>
              <MDBNavbarToggler
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowNavSecond(!showNavSecond)}
              >
                <MDBIcon icon='bars' fas />
              </MDBNavbarToggler>
              <MDBCollapse navbar show={showNavSecond}>
                <MDBNavbarNav>
                  <MDBNavbarLink href='/'>Home</MDBNavbarLink>
                  <MDBNavbarLink href='/products'>Products</MDBNavbarLink>
                  <MDBNavbarLink href='/login'>Login/Signup</MDBNavbarLink>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        );
      }
    }
  
    return (
      <>
        {showNavigation()}
      </>
    );
  }
  