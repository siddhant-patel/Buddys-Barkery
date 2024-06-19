import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home/index'
import About from './components/About/index'
import Products from './components/Products'
import Covid19 from './components/Covid19'
import Error from './components/Error'
import Contact from './components/Contact'
import Donate from './components/Donate'
import HappyCustomers from './components/HappyCustomers'
import logonav from './images/logonav.png'
import styled from 'styled-components'
import useWindowSize from 'react-use-window-size';
import Confetti from 'react-confetti'

const Show = styled.div`
  position: fixed;
  z-index: 20;
  background: #FFDBE1;
  display: flex;
  justify-content: center;
  transition: all 1s linear ease-in;
  align-items: center;
  width: 100%;
  height: 100vh;
  img {
    width: 20vw;
  }
  @keyframes animMain {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`

function App() {
  // const dateLaunch = '2021-09-22T18:00:00.000+05:30'
  // const [show, setshow] = useState(false)
  // const [launch, setlaunch] = useState(false)
  // const [anim, setanim] = useState(false)
  // const [confettiRun, setconfettiRun] = useState(true)
  // const[countdown,setcountdown] = useState(epoch(dateLaunch))
  // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  
  // function epoch (date) {
  //   return Date.parse(date.toString())
  // }

  // function getWindowDimensions() {
    // const { innerWidth: width, innerHeight: height } = window;
    // return {
    //   width,
    //   height
    // };
  // }

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowDimensions(getWindowDimensions());
  //   }

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // const launchSite = () => {
  //   setshow(true)
  //   setTimeout(() => {
  //     setanim(true)
  //   },1000)
  //   setTimeout(() => {
  //     setshow(false)
  //     setlaunch(true)
  //   },2000)
  //   setTimeout(() => {
  //     setconfettiRun(false)
  //   },10000)
  // }
  // useEffect(() => {
  //   if (epoch(new Date()) > countdown) {
  //     setlaunch(true)
  //     setconfettiRun(false)
  //   }
  // },[])
  return (
    <div className="App">
      {/* <Show style={{display: show ? "flex" : "none", animation: anim ? "1s animMain" : "none"}} >
        <img src={logonav} />
      </Show> */}
      {/* <div style={{display: (show==false && launch!=true) ? "flex" : "none"}}>
        <ComingSoon countdown={countdown} setshow={launchSite} />
      </div> */}
      <Router>
        <div>
          <Navbar />
        </div>
        <div className="components" style={{marginTop: "14vh"}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/covid" component = {Covid19} />
            <Route exact path="/donate" component = {Donate} />
            <Route exact path="/contact" component = {Contact} />
            <Route exact path="/customers" component = {HappyCustomers} />
            <Route path="/" component={Error} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
