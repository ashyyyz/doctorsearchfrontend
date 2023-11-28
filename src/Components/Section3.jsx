import './Section3.css'
import ImageBottom from '../img/doctorimagebottom.jpg';

const Section3 = () => {

    return (
        <section className='holder'>
            <div className='image-left'>
                <img className="docimagebottom" src={ImageBottom} alt="doctor"/>
                <div className='doctor-desc'>
                    <h2>Specialist : Cardiologist</h2>
                    <h3>Years Of Experience : 10</h3>
                    <h4>Name : Lokesh Sharma</h4>
                </div>

            </div>
            <div className='content-right'>
                <h2 className='heading'>Best Quality service with our experienced doctors</h2>
                <p className='subtext'>With our top doctors, we are able to provide best Medical services above average. We have highly experienced doctors so do not worry.</p>
                <ul>
                    <li>Search your specialist and online consultation anywhere.</li>
                    <li>Consult with our top specialist.</li>
                    <li>Doctors are available 24/7</li>
                </ul>

            </div>

        </section>
    )
}

export default Section3;