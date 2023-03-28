import React from "react"
import "./Projects.css"

const Projects = () => {
    return(
        <>
        <h1 className="Project-Page">You can view my current work here:</h1>
        <ul className="Projects">
            <li className="Project">
                <p className="Project-title"><a href="https://main--inspiring-gelato-aae7ec.netlify.app/">Rostr</a></p>
                <br />
                <p>A rostering application developed as a part of my final graded assignement for my deploma of IT 
                    <br />
                    <br />
                    For details on how to log in, <a href="https://github.com/Reaver113/roster-app/blob/main/README.md">click here</a>
                </p>
            </li>
        </ul>
        </>
        
    )
}

export default Projects