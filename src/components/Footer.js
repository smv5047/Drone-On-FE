import React from "react"
import {
  TwitterShareButton,
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterIcon,
  FacebookIcon,
  EmailIcon,
  LinkedinIcon
} from "react-share"
import styled from "styled-components"

const Style = styled.footer`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  .socialButton {
    padding: 0 2.5%;
  }
`

export default function Footer() {
  return (
    <Style>
      <TwitterShareButton
        className="socialButton"
        title="Drone On, Drone On, Drone Until Your Drone Comes True"
        children="Drone"
        url={window.location.href}>
        <TwitterIcon round={true} width="32" height="32"></TwitterIcon>
      </TwitterShareButton>

      <FacebookShareButton
        className="socialButton"
        title="Drone On, Drone On, Drone Until Your Drone Comes True"
        children="Drone"
        url={window.location.href}>
        <FacebookIcon round={true} width="32" height="32"></FacebookIcon>
      </FacebookShareButton>

      <LinkedinShareButton
        className="socialButton"
        title="Drone On, Drone On, Drone Until Your Drone Comes True"
        children="Drone"
        url={window.location.href}>
        <LinkedinIcon round={true} width="32" height="32"></LinkedinIcon>
      </LinkedinShareButton>

      <EmailShareButton
        className="socialButton"
        title="Drone On, Drone On, Drone Until Your Drone Comes True"
        children="Drone"
        url={window.location.href}>
        <EmailIcon round={true} width="32" height="32"></EmailIcon>
      </EmailShareButton>
    </Style>
  )
}
