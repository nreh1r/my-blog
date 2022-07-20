import React, { Fragment } from "react"
import AllPosts from "../../components/posts/AllPosts"
import { getAllPosts } from "../../lib/posts.util"
import Head from "next/head"

const AllPostsPage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>All My Blog Posts</title>
                <meta
                    name="description"
                    content="A list of posts highlighting key events in my software development journey"
                />
            </Head>

            <AllPosts posts={props.posts} />
        </Fragment>
    )
}

export function getStaticProps() {
    const allPosts = getAllPosts()

    return {
        props: {
            posts: allPosts,
        },
    }
}

export default AllPostsPage
