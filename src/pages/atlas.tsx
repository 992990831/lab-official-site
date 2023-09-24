import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import "./assets/css/atlas.css";

const AtlasPage: React.FC<PageProps> = () => {

    return(
        <>
        <Header></Header>
        <div className="top-banner-atlas">
            <p className="slogan">品牌故事：IC1101-宇宙最大星系</p>
        </div>
        <div className="atlas-page-2">
            <p className="slogan">孪生智脑：脑科学最大图谱库</p>
        </div>
        </>
    )
}

export default AtlasPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>