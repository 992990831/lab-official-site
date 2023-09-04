import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './bootstrap.css';
import './header.css';
import './heartbeat.css';

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
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 400 50">
              <title>SpaceX Logo</title>
              <g className="letter_s">
                <path className="fill-white" d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
                c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"></path>
              </g>
              <g className="letter_p">
                <path className="fill-white" d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
                c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"></path>
              </g>
              <g className="letter_a">
                <polygon className="fill-white" points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	"></polygon>
              </g>
              <g className="letter_c">
                <path className="fill-white" d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
                c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"></path>
              </g>
              <g className="letter_e">
                <polygon className="fill-white" points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	"></polygon>
                <rect className="fill-white" x="219.9" y="18.6" width="41.9" height="5.4"></rect>
              </g>
              <g className="letter_x">
                <path className="fill-white" d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"></path>
                <path className="fill-white" d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"></path>
              </g>
              <g className="letter_swoosh">
                <path className="fill-white" d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"></path>
              </g>
            </svg>
          </a>
          <div id="navigation">
            <ul className="nav-links">
              <li className="nav-item"><a href="/vehicles/falcon-9/" aria-label="Learn about the Falcon 9 vehicle">Falcon 9</a></li>
              <li className="nav-item"><a href="/vehicles/falcon-heavy/" aria-label="Learn about the Falcon Heavy vehicle">Falcon Heavy</a></li>
              <li className="nav-item"><a href="/vehicles/dragon/" aria-label="Learn about the Dragon vehicle">Dragon</a></li>
              <li className="nav-item"><a href="/vehicles/starship/" aria-label="Learn about the Starship vehicle">Starship</a></li>
              <li className="nav-item"><a href="/human-spaceflight/" aria-label="Learn about Human Spaceflight">Human Spaceflight</a></li>
              <li className="nav-item"><a href="/rideshare/" aria-label="Learn about the Rideshare program">Rideshare</a></li>
              <li className="nav-item"><a href="/starshield/" aria-label="Learn about the Starshield program">Starshield</a></li>
              <li className="nav-item"><a href="https://www.starlink.com" aria-label="Learn about Starlink internet" target="_">Starlink</a></li>
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
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Alpha Brain Lab</title>