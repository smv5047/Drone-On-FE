import React, { useState } from 'react'
import axios from 'utils/Axios'
import AuthView from 'components/AuthForm'

export default function AuthView() {
    const [user, setUser] = useState()
    return (<div>
        <AuthView />
        <button>Login</button>
        <button>Signup</button>
    </div>)
}