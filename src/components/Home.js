import React from "react"
import Pfp from "../img/Pfp.jpg"
import './Home.css'
import Background from "./Background"

const Home = () => {
    return(
        <main>
        <img src={Pfp} class="pfp"></img>
        <h1>Jason Alcock</h1>
        <p class="about">
        I'm a Gold Coast / Brisbane based Junior Developer with a passion for design and development, currently looking for work experience to help broaden my skills and advance my knowledge within the industry!<br /><br />
        Please explore my site and feel free to reach out to me if you have any questions!
        </p>
    </main>
        
    )
}

export default Home