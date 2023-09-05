import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import './bootstrap.css';
import './header.css';
import './heartbeat.css';
import './scrolldown.css';

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

  React.useEffect(()=>{
    // while(heartBeatLength > 0)
    // {
    //   setheartBeatLength(heartBeatLength-5);
    //   setInterval(()=>{heartBeat.current?.setAttribute("viewBox", `0 0 ${heartBeatLength} 20`)}, 100);
    // }
    //setRandowmHeartBeat();
    if(showLength >= 0)
    {
      if(!isRunning)
      {
        setRandowmHeartBeat();
        setIsRunning(!isRunning);
      }
      
      showHeartBeatFun();
    }
    else if(hideLength < 154)
    {
      hideHeartBeatFun();
    }
    else {
      setTimeout(()=>{
        setRandowmHeartBeat();
        setIsRunning(false);

        initHeartBeat();
      }, 1000);
    }

    // if(heartBeatLength < 155)
    // {
    //   hideHeartBeatFun();
    // }
    
  }, [showLength, hideLength]);

  return (
    <>
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
            <ul className="nav-links">
              <li className="nav-item"><a href="/vehicles/falcon-9/" aria-label="Learn about the Falcon 9 vehicle">solution</a></li>
              <li className="nav-item"><a href="/vehicles/falcon-heavy/" aria-label="Learn about the Falcon Heavy vehicle">technology</a></li>
              <li className="nav-item"><a href="/vehicles/dragon/" aria-label="Learn about the Dragon vehicle">case</a></li>
              <li className="nav-item"><a href="/vehicles/starship/" aria-label="Learn about the Starship vehicle">about</a></li>
            </ul>
          </div>
        </div>

      </div>
      <div className="top-banner">
        <div className="heart-rate" ref={heartBeatContainer}>
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
          {/* <div className="fade-in"></div>
          <div className="fade-out"></div> */}
        </div>
      </div>
      <a id="banner-scroll-down" className="scroll-down" title="scroll down to first section" aria-label="scroll down to first section" data-module-dynamic="scroll-to" href="#section-d9949bb5-56a2-4cc1-87c9-014e3add43d3">
        
      </a>

    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>