import React, { Fragment } from "react"
import Hero from "../components/home-page/Hero"
import FeaturedPosts from "../components/home-page/FeaturedPosts"
import { getFeaturedPosts } from "../lib/posts.util"
import Head from "next/head"

const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>Welcome to my blog!</title>
                <meta
                    name="description"
                    content="I post blog style updates on my self taught software development journey"
                />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()

    return {
        props: {
            posts: featuredPosts,
        },
    }
}

export default HomePage
