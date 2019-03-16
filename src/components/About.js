import React from 'react'
import Rainbow from '../high-order-components/Rainbow'

const About = (props) => {


    return (
        <div className="container">
            <h3 className="center">About Page</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosa m, ratione cumque deserunt non iusto ab! Provident molestias alias at magni totam pariatur porro animi, officiis laudantium tempora quidem eius!</p>
        </div>
    )

}

export default Rainbow(About)