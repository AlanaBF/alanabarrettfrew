import React from "react";
import AlanaCV from './assets/Alana-Barrett-Frew-CV.pdf';
import './style.css'
import Title from "../../components/Title"

function CV() {
    return (
        <div className="cvBackground">
            <Title>CV</Title>
            <div className="cv">
                <iframe src={`${AlanaCV}#view=fitH`} title="AlanaCV" width="100%" height="1000" />
            </div>

        </div>
    )
}

export default CV;