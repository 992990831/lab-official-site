import * as React from 'react';
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { slide as Menu } from 'react-burger-menu'

const Header = () => {
    return (
        <div id="header" role="navigation" className="section" data-limit=".15">
            <div className="header-bg"></div>
            <div className="header-inner">

                <a href="/" id="logo" aria-label="Link to go to the homepage">
                    <StaticImage style={{ display: "contents" }}
                        alt="logo"
                        src={`../images/169383800965542.png`}
                    />
                </a>
                <div id="navigation">
                    <div className="nav-links">
                        <div>
                            <Link className="nav-item" to="/"> 首页  </Link>
                            <p>&nbsp;</p> 
                        </div>
                        <div>
                            
                            <Link className="nav-item" to="/research">
                                脑科研平台
                            </Link>
                            <p>「N3行星」</p>    
                        </div>
                        <div>
                            <Link className="nav-item" to="/atlas">
                            脑图谱平台                            
                            </Link>
                            <p>「IC1101星系」</p>  
                        </div>
                        <div>
                            <Link className="nav-item" to="/control">脑调控平台</Link>
                            <p>「B1919脉冲星」</p>  
                        </div>
                        <div>
                        
                            <Link className="nav-item" to="/about">我们</Link>
                            <p>&nbsp;</p> 
                        </div>
                        
                        {/* <li className="nav-item"><a href="/">首页</a></li>
                        <li className="nav-item"><a href="/research">脑科研平台</a></li>
                        <li className="nav-item"><a href="/atlas">脑图谱平台</a></li>
                        <li className="nav-item"><a href="/control">脑调控平台</a></li>
                        <li className="nav-item"><a href="/about">我们</a></li> */}
                    </div>
                </div>

                <Menu right>
                        <Link className="menu-item" to="/">首页</Link>
                        <Link className="menu-item" to="/research">脑科研平台</Link>
                        <Link className="menu-item" to="/atlas">脑图谱平台</Link>
                        <Link className="menu-item" to="/control">脑调控平台</Link>
                        <Link className="menu-item" to="/about">我们</Link>
                    {/* <a id="home" className="menu-item" href="/">首页</a>
                    <a id="home" className="menu-item" href="/research">脑科研平台</a>
                    <a id="about" className="menu-item" href="/atlas">脑图谱平台</a>
                    <a id="home" className="menu-item" href="/control">脑调控平台</a>
                    <a id="about" className="menu-item" href="/about">我们</a> */}

                    <a id="home" href="/">超脑荣誉</a>
                    <a id="home" href="/">培训课程</a>
                    <a id="home" href="/">临床招募</a>
                    <a id="about" bm-cross-button href="/about">加入超脑</a>
                    {/* <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ onMenuClick } className="menu-item--small" href="">Settings</a> */}
                </Menu>
            </div>
        </div>
    )
}

export default Header;