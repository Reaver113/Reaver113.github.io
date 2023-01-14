import React from "react"
import Pfp from "./Pfp.jpg"

const Home = () => {
    return(
        <main>
        <img src={Pfp} class="pfp"></img>
        <h1>Jason Alcock</h1>
        <p class="about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet sagittis ex. Quisque eu turpis ut dolor porttitor hendrerit. Nullam placerat interdum augue nec viverra. Maecenas eu leo dignissim, tempus augue lobortis, feugiat turpis. Fusce volutpat, mauris mattis tristique euismod, velit urna laoreet sapien, non lacinia felis purus et lacus. Vestibulum ut rutrum metus. Vivamus accumsan nunc arcu, suscipit molestie tellus posuere non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi aliquet massa et bibendum malesuada. Donec sed vulputate turpis. Sed dapibus eget risus nec mollis. Praesent non commodo ligula. Quisque sit amet ipsum eget turpis interdum egestas. Mauris volutpat tincidunt suscipit. 
        </p>
    </main>
        
    )
}

export default Home