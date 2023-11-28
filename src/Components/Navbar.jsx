import './Navbar.css';

const Navbar = () =>{
    return (
        <section>
        <navbar>
            <div className="text-div">
               <span className="text">HEALTHAPP</span>
            </div>
            <div className="div-nav-right">
                <li className="li-nav">Home</li>
                <li className="li-nav">About</li>
                <li className="li-nav">Services</li>
                <button className='nav-button'>Get Started</button>
                
            </div>
        </navbar>
        </section>

    );
}

export default Navbar;