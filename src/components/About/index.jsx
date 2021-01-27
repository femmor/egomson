import React from 'react';
import "../../App.css"
import styled from "styled-components"
import {FaGithubAlt} from "react-icons/fa"
import Typing from 'react-typing-animation';
import Headshot from "../../images/headshot.jpg"

const About = () => {
    return (
        <>
            <AboutWrapper>
                <div className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-10 col-sm-12 mx-auto text-center my-3">
                                <img className="img-responsive rounded-circle" src={Headshot} alt="headshot" />
                                <div className="details">
                                    <h3>Hi, I'm <span className="my__name">Emmanuel</span> I...
                                    <Typing speed={100}>
                                        <span className="text__type">
                                            am a Frontend Developer.
                                            <Typing.Backspace count={30} />
                                            am a ReactJS fan.
                                            <Typing.Backspace count={17} />
                                            love coffee and music.
                                            <Typing.Backspace count={22} />
                                            love to solve problems.
                                        </span>
                                    </Typing>
                                    </h3>
                                </div>
                                <div className="cta text-center">
                                    <a className="btn cta-button" href="mailto:fegomson@gmail.com">Get In Touch</a>
                                </div>
                                <div className="my-arrow-div text-center my-3">
                                    <span className="github__text">Find me on</span> <a href="https://github.com/femmor" target="_blank" rel="noreferrer"><FaGithubAlt className="github__icon"/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AboutWrapper>
        </>
    );
}

const AboutWrapper = styled.div`
    .about {
        margin-top: 10em;
        border: 1px solid #eee;
        background-color: white;
        padding-bottom: 1em;
    }

    .about img {
        max-width: 15em;
        position: relative;
        bottom: 7.5em;
    }

    .about .details {
        margin-top: -2em;
    }

    .details h3 {
        font-family: "Lato", sans-serif !important;
        font-weight: 700 !important;
        color: #646464;
        font-size: 3.8em;
        padding-bottom: 0.5em;
    }

    span.my__name {
        font-family: 'Dancing Script', cursive;
        color: #b83b5e;
    }

    .github__icon {
        color: #646464;
        font-size: 2em;
    }

    span.github__text {
        margin-right: 0.3em;
        margin-top: 0.1em;
        font-size: 1.2em;
        color: #646464;
    }

    span.text__type {
        color: #fff;
		font-family: "Roboto", sans-serif !important;
        font-weight: 400;  
        font-size: 50px;  
        background: #5b3263;
        padding: 0 7px;   
    }

`

export default About
