// see SignupForm.js for comments
import React, { useState } from 'react';

import { loginUser } from '../../utils/API';
import Auth from '../../utils/auth';

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (

   
    <div className='loginDiv'>
    
        <div className='border1'>
      <form className='loginForm' noValidate validated={validated} onSubmit={handleFormSubmit}>
        <h1>Bookeeper2Go</h1>
        <h2> Login </h2>
            <input  type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}></input>

            <input type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}></input>
      </form>
      <button className='login'>Login</button>
      </div>
      
    </div>
  );
};

export default Login;