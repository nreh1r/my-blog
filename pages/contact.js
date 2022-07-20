import React, { Fragment } from "react"
import ContactForm from "../components/contact/ContactForm"
import Head from "next/head"

const ContactPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact Me</title>
                <meta
                    name="description"
                    content="Contact me to discuss your own software development journey!"
                />
            </Head>
            <ContactForm />
        </Fragment>
    )
}

export default ContactPage
