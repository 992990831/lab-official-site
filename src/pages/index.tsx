import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header";

import './assets/css/bootstrap.css';
//import './assets/css/header.css';
//import './assets/css/heartbeat.css';
//import './assets/css/scrolldown.css';
import './assets/css/burger-menu.css';
import './assets/css/home.css';

const mobileScreenWidth = 768;

const IndexPage: React.FC<PageProps> = () => {
  const canvasEl:any = React.useRef<HTMLCanvasElement>(null)
  //const videoEl:any = React.useRef<HTMLVideoElement>(null)

  // React.useEffect(()=>{
  //   // 创建一个虚拟video元素
  //   const videoEl = document.createElement("video");
  //   videoEl.src = require('../video/TankerDock_16x9.mp4').default;

  //   // 重要：由于浏览器限制自动播放问题，则需要使用无声播放即可实现自动播放
  //   videoEl.muted = true; 
  //   videoEl.autoplay = true;
  //   videoEl.loop = true;
  //   videoEl.play();
  //   //videoEl.current.play();

  //   //debugger;
  //   const cvsWidth = canvasEl.current.width;
  //   const cvsHeight = canvasEl.current.height;
  //   const ctx = canvasEl.current.getContext("2d");
  //   // 关闭图像平滑处理
  //   //https://blog.csdn.net/y01269/article/details/131952007
  //   ctx.imageSmoothingEnabled = false;


  //   // 使用requestAnimationFrame定时器实现canvas绘制video每一帧
  //   const videoRender = () => {
  //     window.requestAnimationFrame(videoRender);
  //     ctx.clearRect(0, 0, cvsWidth, cvsHeight);
      
  //     ctx.drawImage(videoEl, 0, 0, cvsWidth, cvsHeight);
  //   };
  //   videoRender();

  // }, []);
  
  return (
    <>
      <Header></Header>
      <div className="top-banner">
        <p className="slogan">超脑愿景：仰望星空，脚踏实地</p>
      </div>
      <div className="home-page-2" style={{top:"30vh"}}>
        <p className="slogan">超脑使命：成为国际领先的深脑科学平台</p>
      </div>
      <div className="home-page-3">
        {/* <canvas ref={canvasEl} className="home-video-canvas">

        </canvas> */}
        <video aria-hidden="true" muted loop autoPlay playsInline style={{height:"100vh", width:"100vw"}}>
          <source type="video/mp4" src={require('../video/TankerDock_16x9.mp4').default} />
        </video>
        <p className="slogan slogan-video">视频：脑科学科普</p>
      </div>
      <div className="home-page-4">
        <p className="slogan">海外大咖语录</p>
      </div>
      <div className="home-page-5">
        <p className="slogan">动图：大脑vs宇宙</p>
      </div>
      {/* <video ref={videoEl} muted autoPlay loop src={require('../video/TankerDock_16x9.mp4').default}></video> */}
      
      {/* <a id="banner-scroll-down" className="scroll-down" title="scroll down to first section" aria-label="scroll down to first section" data-module-dynamic="scroll-to" href="#section-d9949bb5-56a2-4cc1-87c9-014e3add43d3">
        
      </a> */}

    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Super Brain Nova</title>