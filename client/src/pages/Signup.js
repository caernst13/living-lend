import react, { useState } from 'react'
import { useMutation } from '@apollo/client'
import Auth from "../utils/auth"
import { ADD_USER } from '../utils/mutations';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
    from 'mdb-react-ui-kit';
  
  
export default function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      if (!formState.email || !formState.password || !formState.firstName || !formState.lastName) {
        alert("Please enter all required fields!");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formState.email)) {
        alert("Please enter a valid email address!");
        return;
      }
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
      if (!passwordRegex.test(formState.password)) {
        alert("Please enter a valid password! Your password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.");
        return;
      }
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    };
    
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
    return (
        <MDBContainer fluid className = "my-3">
    
   
              <MDBRow>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center justify-content-center'>
    
                  <p className="h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
    
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput
                placeholder="First Name"
                  label = "First Name"
                  name="firstName"
                  type="firstName"
                  id="firstName"
                  onChange={handleChange}
                 className='w-100' />
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput
                label='Last Name'
                placeholder="Last"
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
                className='w-100' />
                </div>
                    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput
                label='Your Email'
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
                    />
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput label='Password'
                     placeholder="*********"
                     name="password"
                     type="password"
                     id="pwd"
                     onChange={handleChange}/>
                  </div>
    
                  <MDBBtn className='mb-4' size='lg' onClick={handleFormSubmit}>Register</MDBBtn>
    
                </MDBCol>
    
                <MDBCol col='10' md='6' className = "d-flex align-items-center">
                  <img src="https://source.unsplash.com/emqnSQwQQDo" className="img-fluid rounded mb-3 shadow" alt="Bedroom" style={{width: '75%', height: '75%'}}/>
          </MDBCol>
    
              </MDBRow>
    
        </MDBContainer>
      );

}