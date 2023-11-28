import "./Doctor.css"

const Doctor = (props) =>{
    return (
       <div className="doc-container">
        <img className="doc-image" src={props.source} alt="doctor's Image" />
        <h2 className="info">{props.name}</h2>
        <h3 className="info">{props.experience}</h3>
        <h3 className="info">{props.specialist}</h3>
        <h3 className="info">{props.location}</h3>
        <h3 className="info about">{props.about}</h3>
        <button className="doc-button">Book Appointment</button>
       </div>

    )
}

export default Doctor;