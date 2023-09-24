import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import "./assets/css/control.css"

const ControlPage: React.FC<PageProps> = () => {

    return(
        <>
        <Header></Header>
        <div className="top-banner-control">
        <p className="slogan">品牌故事：B1919-史上发现的第一颗脉冲星</p>
        </div>
        <div className="control-page-2">
        <p className="slogan">射电星脑：六脉神剑，深脑调控</p>
        </div>
        </>
    )
}

export default ControlPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>