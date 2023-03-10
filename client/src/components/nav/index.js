export default function Nav() {
    const [showNavSecond, setShowNavSecond] = useState(false);
  
    function showNavigation() {
      if (Auth.loggedIn()) {
        return (
          <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
              <MDBNavbarBrand href='#home'>Living Lend</MDBNavbarBrand>
              <MDBNavbarToggler
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowNavSecond(!showNavSecond)}
              >
                <MDBIcon icon='bars' fas />
              </MDBNavbarToggler>
              <MDBCollapse navbar show={showNavSecond}>
                <MDBNavbarNav>
                  <MDBNavbarLink active aria-current='page' href='#'>
                    Home
                  </MDBNavbarLink>
                  <MDBNavbarLink href='#home'>Home</MDBNavbarLink>
                  <MDBNavbarLink href='#products'>Products</MDBNavbarLink>
                  <MDBNavbarLink href='#orderhistory'>Order History</MDBNavbarLink>
                  <MDBNavbarLink href='#logout'>Logout</MDBNavbarLink>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#cart'>
                      <MDBBadge pill color='danger'>!</MDBBadge>
                      <span>
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
              <MDBNavbarBrand href='#home'>Living Lend</MDBNavbarBrand>
              <MDBNavbarToggler
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowNavSecond(!showNavSecond)}
              >
                <MDBIcon icon='bars' fas />
              </MDBNavbarToggler>
              <MDBCollapse navbar show={showNavSecond}>
                <MDBNavbarNav>
                  <MDBNavbarLink active aria-current='page' href='#'>
                    Home
                  </MDBNavbarLink>
                  <MDBNavbarLink href='#home'>Home</MDBNavbarLink>
                  <MDBNavbarLink href='#products'>Products</MDBNavbarLink>
                  <MDBNavbarLink href='#login'>Login/Signup</MDBNavbarLink>
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
  