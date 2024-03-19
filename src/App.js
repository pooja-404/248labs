import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Headersec from './components/Headersec';
import Slidersec from './components/Slidersec';
import Gamesec from './components/Gamesec';
import Levelsec from './components/Levelsec';
import Roguesec from './components/Roguesec';
import Richsec from './components/Richsec';
import Behindsec from './components/Behindsec';
import Nextsec from './components/Nextsec';
import Formsec from './components/Formsec';
import Footersec from './components/Footersec';
import Roadmapsec from './components/Roadmapsec';
import Backtotop from './components/Backtotop';
import Preloadersec from './components/Prelodersec';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  return (
    <div className='bg-black '>
      {data ? (
        <div>{<Preloadersec />}</div>
      ) : (
        <div className="App">
          <Headersec />
          <Slidersec />
          <Gamesec />
          <Levelsec />
          <Roguesec />
          <Richsec />
          <Behindsec />
          <Nextsec />
          <Roadmapsec />
          <Formsec />
          <Footersec />
          <Backtotop />
        </div>
      )}
    </div>
  );
}

export default App;
