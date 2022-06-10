import React, { useEffect, useReducer, useState } from 'react'
import { AuthContext } from './auth/authContext'
import { AppRouter } from './routers/AppRouter'
import { authReducer } from './auth/authReducer';

const init = () =>{
  return JSON.parse(localStorage.getItem('user')) || {loged: false};
}

export const StoreApp = () => {

  const [user,dispatch] =useReducer(authReducer, {}, init);

  useEffect(() => {
    if(!user) return
  
    localStorage.setItem('user', JSON.stringify(user))

  }, [user])

  const [search, setSearch] = useState('')

  return (
    <AuthContext.Provider value={{
      search,
      setSearch,
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
