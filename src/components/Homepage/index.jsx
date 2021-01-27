import React, {useState} from 'react';
import PageBg from "../../images/pattern.png"
import { portfolioData } from "../../data"

// Components
import PageTop from "../PageTop"
import About from '../About';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import HireMe from '../HireMe';
import Footer from "../Footer"

const Homepage = () => {
    const [data, setData] = useState(portfolioData)

    return (
            <>
                <div style={{
                    backgroundImage: `url(${PageBg})`,
                    backgroundAttachment: "fixed"
                }}>
                    <PageTop/>
                    <About/>
                    <Skills/> 
                    <Portfolio data={data}/>
                    <HireMe/>
                    <Footer/> 
                </div>
            </>
    )
}

export default Homepage

