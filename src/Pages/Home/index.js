import React from "react";
import "./style.css";
import Title from "../../components/Title"
import ProfilePic from "./assets/images/ProfilePic.jpeg"

function Home() {
    return (
            <div className="homeBackground">
                <Title>Welcome to my Portfolio</Title>
                <img src={ProfilePic} className="profilePic" alt="Profile Image" />
                <h2 className="myname">Alana Barrett-Frew</h2>
                <h2 className="brand">Front End Web Developer and Educator.</h2>
                <p className="text">
                    Currently upskilling for a career change.
                    Studying a 16 week intense Skills Bootcamp in Front End Web Development with edX. I am also completing the Prince 2 Foundation and Practitioner
                    Certificate and Agile PM Foundation and Practitioner Certificate with The Knowledge Academy. I am so
                    excited to learn and develop further. Full of passion and creativity which shows in
                    all areas of my life, both work and home. I always strive to push my self to be better, to
                    keep learning and not get complacent in my comfort zone.
                </p>
            </div>
    )
}

export default Home