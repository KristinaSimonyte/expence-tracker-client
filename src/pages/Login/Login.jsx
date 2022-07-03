import React, { useContext, useState } from 'react';
import Section from '../../components/Section/Section';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { AuthContext } from '../../store/authContext';

const Login = () => {
  const authCtx = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const onLogin = async (event) => {

    event.preventDefault();
    // console.log(userDetails);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetails),
        }
        );
       //  console.log(res);
        const data = await res.json();
        if (data.success) {
         // localStorage.setItem('token', data.data.token);
          authCtx.login(data.data.token);
          // setIsSuccessLogin (true);
          setTimeout(() => {
            navigate('/transactions');
          }, 1000);
        }
    } catch (err) {
      alert(err.message || 'Unexpected Issue');
    }
  };

  return (
    <>
      <Header />
      <Section>
        <form onSubmit={onLogin}>
          <TextInput
            label='Email:'
            name='email'
            type='email'
            placeholder='Please enter your email'
            handleChange={(value) =>
              setUserDetails({ ...userDetails, email: value })
            }
          />
          <TextInput
            label='Password:'
            name='password'
            type='password'
            placeholder='Please enter your password'
            handleChange={(value) =>
              setUserDetails({ ...userDetails, password: value })
            }
          />
          <Button type='submit' color='primary'>
            Login
          </Button>
        </form>
        <p className='info'>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
      </Section>
    </>
  );
};

export default Login;
