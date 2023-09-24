import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import "./assets/css/research.css";

const ResearchPage: React.FC<PageProps> = () => {

    return(
        <>
            <Header></Header>
            <div className="top-banner-research">
                <p className="slogan">品牌故事：地球-太阳系第三行星</p>
            </div>
            <div className="research-page-2">
                <p className="slogan">近地深脑：AGI for Deep Brain</p>
            </div>
        </>
    )
}

export default ResearchPage

export const Head: HeadFC = () => <title>Super Brain Nova</title>