import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"

const ResearchPage: React.FC<PageProps> = () => {

    return(
        <>
        <Header></Header>
        <div className="top-banner-research">

        </div>
        </>
    )
}

export default ResearchPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>