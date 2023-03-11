import React from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ContactMe from "../../components/ContactMe/index";
import Title from "../../components/Title"

function Contact() {

    return (
            <div className="contactBackground">
            <Title>Contact Me</Title>
            <p>
                If you want to get in contact 
                <br />
                please use the form below 
                <br />
                or 
                <br />
                click on one of the links:
                
            </p>
            <span className="buttongroup">
                <a href="https://twitter.com/AlanaBF81"><i className="fa fa-twitter"></i></a>
                <a href="https://github.com/AlanaBF"><i className="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/in/alanabarrettfrew"><i className="fa fa-linkedin"></i></a>
            </span>
            <div>
                <ContactMe />
            </div>
          
           
            </div>
    )
}

export default Contact;
