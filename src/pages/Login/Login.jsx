import React, { useContext, useState } from 'react';
import Section from '../../components/Section/Section';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { AuthContext } from '../../store/authContext';
import Notification from '../../components/Notification/Notification';

const Login = () => {
  const authCtx = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const onLogin = async (event) => {
    event.preventDefault();

    setErrorStatus(false);
    setErrorMessage('');

    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });

      const data = await res.json();
      if (data.success) {
        authCtx.login(data.data.token);

        setTimeout(() => {
          navigate('/transactions');
        }, 1000);
      } else {
        setErrorStatus(true);
        setErrorMessage(data.error[0][0]?.message || data.error[0]|| 'Klaida prisijungiant');
      }
    } catch (err) {
      setErrorStatus(true);
      setErrorMessage(err.message);
    }
  };

  return (
    <>
      <Header />
      <Section>
      {errorStatus && <Notification>{errorMessage}</Notification>}
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
