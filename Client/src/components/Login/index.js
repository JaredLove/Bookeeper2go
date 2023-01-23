import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });

    const [login, { error }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await login({
          variables: { ...formState }
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };

    return (
        <div className='border1'>
          <div className='loginForm'>
              <h4>Bookeeper2Go</h4>
              <h5>Login</h5>
              <form className='form' onSubmit={handleFormSubmit}>
                <h5>Email</h5>
                <label htmlFor='email'></label>
                <input 
                    id='email'
                    placeholder='Enter Email'
                    type='email'
                    name='email'
                    value={formState.email}
                    onChange={handleChange}
                />
                <h5>Password</h5>
                <label htmlFor='password'></label>
                <input 
                    id='password'
                    placeholder='Enter Password'
                    name='password'
                    type='password'
                    value={formState.password}
                    onChange={handleChange}
                />
                <button type='submit' className='secondary-button'>
                    Login
                </button>
                <p>If you do not already have an account sign up   <Link className="link"as={Link} to='/signup'>
                    here
            </Link></p>
              
              </form>
              {error && <div>Login failed</div>}
          </div>
        </div>
    )
}

export default Login;
