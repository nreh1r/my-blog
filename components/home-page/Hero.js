import React from "react"
import classes from "./Hero.module.css"
import Image from "next/image"

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/nicholas.JPG"
                    alt="An Image Showing Nicholas"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hello, My Name is Nicholas</h1>
            <p>
                This is my blog about my self taught software development
                journey
            </p>
        </section>
    )
}

export default Hero
