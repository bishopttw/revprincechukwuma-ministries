import heroBg from "../assests/images/heroBg.jpg";
export default function Hero(){
    return (
        <>
        <div className="hero" style={{backgroundImage: `url(${heroBg})`}}>
            <h1>WELCOME TO REV PRINCE CHUKWUMA MINISTRIES</h1>
            <p>EMPOWERING LIVES THROUGH THE WORD, BUSINESS, AND SOUND EVANGELISM.</p>
            <ul className="hero-btn-container">
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
        </>
    );
}