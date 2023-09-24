import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import "./assets/css/about.css"

const AboutPage: React.FC<PageProps> = () => {

    return(
        <>
            <Header></Header>
            <div className="about-page-1">
                <p className="slogan">一群来自斯坦福/哈佛/UIUC/石溪/交大/同济 热爱深科技的技术宅</p>
            </div>
            <div className="about-page-2">
                <p className="slogan">梦启航的地方：硅谷-斯坦福</p>
            </div>
            <div className="about-page-3">
                <p className="slogan">WeDestiny：AlphaCentauri 我们的征途，是星辰大海</p>
            </div>
        </>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>