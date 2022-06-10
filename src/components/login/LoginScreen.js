import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import './login.css'

export const LoginScreen = () => {

  const {dispatch} = useContext(AuthContext)
  
  const navigate = useNavigate();

  const handleLogin = () =>{

    const action = {
      type: types.login,
      payload:{
        name:'Fede'
      }
    }

    dispatch(action);


    const lastPath = localStorage.getItem('lastPath') || '/productos';

    navigate(lastPath, {
      replace: true
    })

  }

  return (
    <div className='login'>
      <h1>LoginScreen</h1>
      <hr/>
        <button
          onClick={handleLogin}
        >
          Login
        </button>
    </div>
  )
}
