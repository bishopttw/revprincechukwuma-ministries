import { Link } from "react-router-dom";
import umuboyiiImg from "../assests/images/white.jpg";
import rcbaImg from "../assests/images/rcbaMain.jpeg";
import ministryImg from "../assests/images/ministry.jpeg";
import powersoundImg from "../assests/images/powersoundImg.jpg";
export default function Explore(){
    return(
        <>
        <div className="highlight-boxes">
            <h2>EXPLORE</h2>

            <div className="highlight-grid">

                <div className="card">
                    <h3>RCBA</h3>
                    <img src={rcbaImg} alt="RCBA"/>
                    <p>Resource Business Christian Academy (mentorship program)
                       Equipping entrepreneurs with biblical wisdom and business excellence.
                    </p>
                    <Link to="/rcba">EXPLORE</Link>
                </div>

                <div className="card">
                    <h3>UMUBOYII</h3>
                    <img src={umuboyiiImg} alt="Umuboyii"/>
                    <p> Monthly fellowship dedicated to mentoring apprentices and young people in Christ. 
                      A safe space for growth, accountability, and building a generation of godly young men.
                    </p>
                    <Link to="/umuboyii">EXPLORE</Link>
                </div>

                <div className="card">
                    <h3>POWER SOUND</h3>
                    <img src={powersoundImg} alt="Power Sound"/>
                    <p>Professional sound, stage lighting, and event 
                        equipment for hire. Powering worship experiences, 
                        conferences, and events with excellence and precision.
                    </p>
                    <Link to="/powersound">EXPLORE</Link>
                </div>

                <div className="card">
                    <h3>MINISTRY</h3>
                    <img src={ministryImg} alt="Ministry"/>
                    <p>Teachings, sermons, and messages to the nations. 
                        Ven. Prince Chukwuma delivers the word of God with power and clarity — 
                        online, onsite, and across churches worldwide.
                    </p>
                    <Link to="/ministry">EXPLORE</Link>
                </div>
            </div>
        </div>
        </>
    );
}