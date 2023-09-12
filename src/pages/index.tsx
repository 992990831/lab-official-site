import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header";

import './assets/css/bootstrap.css';
import './assets/css/header.css';
import './assets/css/heartbeat.css';
import './assets/css/scrolldown.css';
import './assets/css/burger-menu.css';
import './assets/css/home.css';

const IndexPage: React.FC<PageProps> = () => {
  const heartBeat = React.useRef<SVGSVGElement>(null);
  const heartBeatContainer = React.useRef<HTMLDivElement>(null);
  const [randomTop, setRandomTop] = React.useState(30);
  const [randomLeft, setRandomLeft] = React.useState(30);

  const [isRunning, setIsRunning] = React.useState(false);

  const [showLength, setShowLength] = React.useState(150);
  const [hideLength, setHideLength] = React.useState(0);

  const setRandowmHeartBeat = () => {
    let min=20; 
    let max=80;  
    let random = Math.floor(Math.random() * (+max - +min)) + +min; 
    setRandomTop(random);

    let leftMin=15;
    let leftMax=60;
    let randomLeft = Math.floor(Math.random() * (leftMax - leftMin)) + min;
    setRandomLeft(randomLeft);

    heartBeatContainer.current?.style.setProperty("margin-left", `${randomLeft}vw`);
  }

  const initHeartBeat = () => {
    setShowLength(150);
    setHideLength(0);
  }

  const showHeartBeatFun = ()=>{
    setTimeout(()=>{
      heartBeat.current?.setAttribute("viewBox", `-${showLength} 0 150 75`);
      heartBeat.current?.style.setProperty("margin-left", `-${showLength}px`);
      setShowLength(showLength - 1);
    }, 5);
  };

  const hideHeartBeatFun = ()=>{
    setTimeout(()=>{
      heartBeat.current?.setAttribute("viewBox", `${hideLength} 0 150 75`);
      heartBeat.current?.style.setProperty("margin-left", `${hideLength}px`);
      setHideLength(hideLength + 1);
    }, 5);
  };

  // React.useEffect(()=>{
  //   if(showLength >= 0)
  //   {
  //     if(!isRunning)
  //     {
  //       setRandowmHeartBeat();
  //       setIsRunning(!isRunning);
  //     }
      
  //     showHeartBeatFun();
  //   }
  //   else if(hideLength < 154)
  //   {
  //     hideHeartBeatFun();
  //   }
  //   else {
  //     setTimeout(()=>{
  //       setRandowmHeartBeat();
  //       setIsRunning(false);

  //       initHeartBeat();
  //     }, 1000);
  //   }
  // }, [showLength, hideLength]);

  React.useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll );
    }
  }, []);

  const handleScroll = (e: any)=> {
    handleMoonPage(e.target.scrollingElement.scrollTop);
  }

  const handleMoonPage = (scrollTop: number) => {

    let section = document.getElementById("moon_page");
    let top = section?.offsetTop ?? 0; //滚动区域离window顶部的距离
    let height = section?.offsetHeight ?? 0; //滚动区域的高度

    const sky = document.getElementById("home_star_sky");
    const moon = document.getElementById("home_moon");
    const sea = document.getElementById("home_sand_sea");
    const slogan = document.getElementById("company_slogan");
    // if (scrollTop < window.innerHeight) //
    //   return;

    console.log(scrollTop, top, height);
    if (scrollTop > window.innerHeight) {
      console.log("fixed");

      sky?.style.setProperty("position", "fixed");
      moon?.style.setProperty("position", "fixed");

      //经过100vh的高度，top从55vh变为15vh
      moon?.style.setProperty("top", `${55 - ((scrollTop-window.innerHeight)/window.innerHeight) * 40}vh`);
      //left从-5vw变为25vw
      moon?.style.setProperty("left", `${-5 + ((scrollTop-window.innerHeight)/window.innerHeight) * 30}vw`);
      //旋转角度从-10deg变为90deg
      moon?.style.setProperty("transform", `rotate(${-10 + ((scrollTop-window.innerHeight)/window.innerHeight) * 100}deg)`);

      
      sea?.style.setProperty("position", "fixed");

      //top从55%到45%
      slogan?.style.setProperty("top", `${55 - ((scrollTop-window.innerHeight)/window.innerHeight) * 10}%`);
      //top从0到1
      slogan?.style.setProperty("opacity", `${0 + ((scrollTop-window.innerHeight)/window.innerHeight) * 1}`);
    }
    else {
      sky?.style.setProperty("position", "absolute");
      moon?.style.setProperty("position", "absolute");
      sea?.style.setProperty("position", "absolute");
    }
  }

  const onMenuClick = (event: any) => {
    event.preventDefault();
  }

  return (
    <>
      <Header></Header>
      <div className="top-banner">
        <p className="slogan">借助AI之力</p>
        <p className="slogan">探索大脑的秘密</p>
          {/* <div className="heart-rate" ref={heartBeatContainer}>
            <svg ref={heartBeat} style={{marginTop:`${randomTop}vh`, marginLeft: "150px"}} x="0px" y="0px" width="150px" height="73px" viewBox="150 0 150 73" enable-background="new 0 0 150 73">
              <defs>
                <filter id="dropGlow" width="1.5" height="1.5" x="-.25" y="-.25">
                    <feGaussianBlur id="feGaussianBlur5384" in="SourceAlpha" stdDeviation="15.000000" result="blur"/>
                    <feColorMatrix id="feColorMatrix5386" result="bluralpha" type="matrix" values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 0.800000 0 "/>
                    <feOffset id="feOffset5388" in="bluralpha" dx="0.000000" dy="0.000000" result="offsetBlur"/>
                    <feMerge id="feMerge5390">
                        <feMergeNode id="feMergeNode5392" in="offsetBlur"/>
                        <feMergeNode id="feMergeNode5394" in="SourceGraphic"/>
                    </feMerge>
                </filter>
              </defs>
              <polyline fill="none" stroke="#FBFEFE" stroke-width="2" style={{filter:"url(#dropGlow)"}} points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,30 80.067,53.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
              />
            </svg>
          </div> */}
      </div>
      <div id="moon_page">
        <div id="home_star_sky" className="home_star_sky">

        </div>
        <div id="home_moon" className="home_moon">

        </div>
        <div id="home_sand_sea" className="home_sand_sea">
            <p id="company_slogan" className="slogan-moon">我们的征途是星星和大海</p>
        </div>
      </div>
      
      {/* <a id="banner-scroll-down" className="scroll-down" title="scroll down to first section" aria-label="scroll down to first section" data-module-dynamic="scroll-to" href="#section-d9949bb5-56a2-4cc1-87c9-014e3add43d3">
        
      </a> */}

    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>