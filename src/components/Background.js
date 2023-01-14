import React from "react"
import VideoBg from "../img/Purple.mp4"
import './Background.css'

const Background = () => {
    return(
        <div className='videoCont'>
            <video src={VideoBg} autoPlay loop muted disablePictureInPicture/>
        </div>
        
    )
}

export default Background