import React from 'react'
import { useState } from 'react';
import { useSginup } from '../../hooks/useSginup';
import styles from './SignUp.module.css'

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('')
  const {siginup, error, isPending } = useSginup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    siginup(email, password, displayName)
  }


  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Sign Up</h2>
      <label>
        <span>email:</span>
        <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
      </label>
      <label>
        <span>password:</span>
        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
      </label>
      <label>
        <span>Your name</span>
        <input type="text" placeholder='Alex' value={displayName} onChange={(e) => {setDisplayName(e.target.value)}}/>
      </label>
      {error && <p>{error}</p>}
      <button className='btn'>Sign Up</button>
    </form>
  )
}
