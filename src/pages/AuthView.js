import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'utils/Axios'
import AuthForm from 'components/AuthForm'

export default function AuthView(props) {
    const [user, setUser] = useState()

    return (<div>
        <AuthForm user={user} setUser={setUser} signup={props.signup}/>
        <NavLink to='/login'><button>Login</button></NavLink>
        <NavLink to='/signup'><button>Signup</button></NavLink>
    </div>)
}