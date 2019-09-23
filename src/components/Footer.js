import React from 'react';
import {TwitterShareButton, FacebookShareButton, EmailShareButton, LinkedinShareButton} from 'react-share';
import {TwitterIcon, FacebookIcon, EmailIcon, LinkedinIcon} from 'react-share';


export default function Footer () {

    return (
        <footer>
            <TwitterShareButton className ="socialButton" title='Drone On, Drone On, Drone Until Your Drone Comes True' children="Drone" url={window.location.href}>
                <TwitterIcon round= {true} width="32" height="32"></TwitterIcon>
            </TwitterShareButton>
        
            <FacebookShareButton className ="socialButton" title='Drone On, Drone On, Drone Until Your Drone Comes True' children="Drone" url={window.location.href}>
                <FacebookIcon round= {true} width="32" height="32"></FacebookIcon>
            </FacebookShareButton>
        
            <LinkedinShareButton className ="socialButton" title='Drone On, Drone On, Drone Until Your Drone Comes True' children="Drone" url={window.location.href}>
                <LinkedinIcon round= {true} width="32" height="32"></LinkedinIcon>
            </LinkedinShareButton>
        
            <EmailShareButton className ="socialButton" title='Drone On, Drone On, Drone Until Your Drone Comes True' children="Drone" url={window.location.href}>
                <EmailIcon round= {true} width="32" height="32"></EmailIcon>
            </EmailShareButton>
           
        </footer>
    )
}