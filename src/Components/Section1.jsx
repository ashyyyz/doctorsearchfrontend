import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IconContext } from "react-icons";
import "./Section1.css";
import docImage from '../img/doctorimagetop.gif';
import { Link } from "react-router-dom";


const Section1 = (props) => {

  const areas = ['Select Area', 'Delhi', 'Hapur', 'Muradabad', 'Ghaziabad', 'Bareilly', 'Kanpur'];

  const doctors = ['Select Doctor', 'Cardiologist','General Physician', 'Surgeon', 'Dentist'];

  const [area, setarea] = useState('Select Area');
  const [doctor, setdoctor] = useState('Select Doctor');

  const handlearea = (e) =>{
    setarea(e.target.value)
  }

  const handledoctor = (e) => {
    setdoctor(e.target.value)

  }

  
  

  const submitHandler = (e) => {
    e.preventDefault();
    props.ondoctorHandler(
      {
        area,
        doctor
      }
    )
    // const doctorobj ={
    //   area,
    //   doctor
    // }
    // props.doctorHandler(doctorobj);
  //   const res = await fetch('http://localhost:4000/doctors',{
  //     method:"GET"
  // })
  // if(res.status === 200)
  //    console.log(res);
  // else
  //    console.log("error");
    // <FoundedDoctor/>
    // console.log(area,doctor);
    
    
    

  }
  return (
    <section className="text-img-box">
      <div className="text-box">
        <span className="head-text1">Find and Search Your</span>
        <span className="head-text2">Suitable Doctors</span>
        <span className="subtext">
          Join us and take care of yourself and your family with Health services
          that will make you feel confident and safe in your daily life
        </span>
        <div className="search-box">
          <select className="doctor-select" value={area}
        onChange={handlearea}>
            {areas.map((area,index) => <option key={index} value={area}>{area}</option>)}
          </select>
          <select className="area-select" value={doctor}
        onChange={handledoctor}>
            {doctors.map((doctor,index) => <option key={index} value={doctor}>
            {doctor}</option>)}
          </select>
          <IconContext.Provider value={{ className: 'search-bar' }}>
            <Link to='/doctors'><GoSearch method="GET" onClick={submitHandler}/></Link>
           
          </IconContext.Provider>

        </div>
      </div>

      <div className="image-box">
        <img src={docImage} alt="doctor" className="doctor-image" />
      </div>
    </section>
  );
};

export default Section1;
