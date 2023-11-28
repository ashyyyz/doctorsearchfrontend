import { GoSearch } from "react-icons/go";
import { IconContext } from "react-icons";
import {PiTarget} from 'react-icons/pi';

import "./Section2.css";
const Section2 = () => {
  return (
    <section className="section1-box">
      <span className="head-text">3 Easy steps and get your Solution</span>
      <div className="box">
        <div className="sub-box">
           <IconContext.Provider value={{ className: 'search' }}>
           <GoSearch/>
           <h2>Find best Doctors</h2> 
           <p>Find your doctor with minimum effort. We have kept everything organised for you.</p>
           </IconContext.Provider>
        </div>
        <div className="sub-box">
           <IconContext.Provider value={{ className: 'search' }}>
           <PiTarget />
           <h2>Get Appointment</h2> 
           <p>Ask for an appointment of a doctor quickly with almost a single click. We take care of the rest.</p>
           </IconContext.Provider>
        </div>
        <div className="sub-box">
           <IconContext.Provider value={{ className: 'search' }}>
           <GoSearch />
           <h2>Happy Consultations</h2> 
           <p>Find your doctor with minimum effort. We have kept everything organised for you.</p>
           </IconContext.Provider>
        </div>
      </div>
    </section>
  );
};

export default Section2;
