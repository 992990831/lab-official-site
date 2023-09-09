import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"

const AtlasPage: React.FC<PageProps> = () => {

    return(
        <>
        <Header></Header>
        <div className="top-banner-atlas">

        </div>
        </>
    )
}

export default AtlasPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>