import React, { useContext, useState } from "react"
import styled from 'styled-components'
import EditUserForm from "components/EditUserForm"
import { CurrentUser } from "../App"
import {Route} from "react-router-dom"
import AuthView from "pages/AuthView"

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`



export default function Home() {
  const { authUser, setAuthUser } = useContext(CurrentUser)
  const [isEditing, setIsEditing] = useState(false)

  /*Logout Function*/
  function Logout () {
    localStorage.clear()
    setAuthUser(null)
  }
  return (
    <div>
      {!isEditing ? (
        <Style>
          <p>{authUser.full_name}</p><p>{authUser.email}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <br/>
          <button onClick={() => Logout()}>Log Out</button>
          <br/>
        </Style>
      ) : (
        <Style>
        <EditUserForm setIsEditing={setIsEditing} />
        <button onClick={() => setIsEditing(false)}>Cancel</button>
        <br/>
        <button onClick={() => Logout()}>Log Out</button>
        <br/>
        </Style>
      )}
    </div>
  )
}
