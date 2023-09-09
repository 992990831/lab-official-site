import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"

const ControlPage: React.FC<PageProps> = () => {

    return(
        <>
        <Header></Header>
        <div className="top-banner-control">

        </div>
        </>
    )
}

export default ControlPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>