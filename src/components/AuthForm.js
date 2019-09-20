import React from 'react'

export default function AuthForm() {
    return (
        <form>
            <input type='email' name='email' placeholder='Email' />
            <input type='password' name='password' placeholder='Password' />
        </form>
    )
}