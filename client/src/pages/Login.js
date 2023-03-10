import react from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

export default function Login() {    
          return (
            <MDBContainer fluid className="p-3 my-5 h-custom" >
        
              <MDBRow>
        
                <MDBCol col='10' md='6'>
                  <img src="https://source.unsplash.com/AAy5l4-oFuw" className="img-fluid rounded mb-3 shadow" alt="Dining Room" />
                </MDBCol>
        
                <MDBCol col='4' md='6' className = "d-flex flex-column align-items-center justify-content-center">
        
                  <MDBInput wrapperClass='mb-4 w-75 ' label='Email address' id='formControlLg' type='email' size="lg"/>
                  <MDBInput wrapperClass='mb-4 w-75' label='Password' id='formControlLg' type='password' size="lg"/>
        
                  <div className="d-flex justify-content-between mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  </div>
        
                  <div className='text-center text-md-start mt-4 pt-2'>
                    <MDBBtn className="mb-0 px-5" size='lg' color = "dark">Login</MDBBtn>
                    <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/signup" className="link-danger">Register</a></p>
                  </div>
        
                </MDBCol>
        
              </MDBRow>
        
            </MDBContainer>
          );
        }
        
