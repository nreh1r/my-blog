import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "posts")

export function getPostData(postidentifier) {
    const postSlug = postidentifier.replace(/\.md$/, "") // Removes file extension
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)

    const postData = {
        slug: postSlug,
        ...data,
        content,
    }
    return postData
}

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory)
}

export function getAllPosts() {
    const postFiles = getPostsFiles()

    const allPosts = postFiles.map((postFile) => {
        return getPostData(postFile)
    })

    const sortedPosts = allPosts.sort((postA, postB) =>
        postA.date > postB.date ? -1 : 1
    ) // Sort so the most recent is first
    return sortedPosts
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts()
    const featuredPosts = allPosts.filter((post) => post.isFeatured)
    return featuredPosts
}
