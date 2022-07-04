import React, { useState } from 'react';
import Section from '../../components/Section/Section';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Notification from '../../components/Notification/Notification';

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onRegister = async (event) => {
    event.preventDefault();
    setErrorStatus(false);
    setErrorMessage('');

    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDetails),
        }
      );
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('token', data.data.token);
        // setIsSuccessLogin (true);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        setErrorStatus(true);
        setErrorMessage(data.error[0][0]?.message || 'Klaida registruojantis');
      }
    } catch (err) {
      alert(err.message || 'Unexpected Issue');
      setErrorStatus(true);
      setErrorMessage(err.message);
    }
  };

  return (
    <>
      <Header title='register' />
      <Section>
        {errorStatus && <Notification>{errorMessage}</Notification>}
        <form onSubmit={onRegister}>
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
            Register
          </Button>
        </form>
        <p className='info'>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </Section>
    </>
  );
};

export default Register;
