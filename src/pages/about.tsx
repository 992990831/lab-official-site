import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"

const AboutPage: React.FC<PageProps> = () => {

    return(
        <>
        <Header></Header>
        </>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>