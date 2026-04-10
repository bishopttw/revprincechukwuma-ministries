import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";
export default function Footer(){
    return(
        <section id="contact">
        <div className="footer-container">

            <div className="footer-col">
                <h4>Rev. Prince Chukwuma</h4>
                <p>Archdeacon in the Diocese of Nnewi, Anglican communion. mentor of young men populary know in igbo land as (umuboyii)
                    and teacher of God's word. Inspring lives through the word of God and  business seminars orgainsed by him.
                </p>
            </div>

            <div className="footer-col">
                <h4>CONTACT</h4>
                <a href="tel:+2348039512515">Phone: 080-3951-2515</a>
                <a href="mailto:rev.chukwumaprince@gmail.com" className="email">Email: rev.chukwumaprince@gmail.com</a>
                <p>Address: [ST.ANDREW'S ANGLICAN CHURCH UMUOHAMA UKPOR ANAMBRA STATE NIGERIA.]</p>
            </div>

            <div className="footer-col">
                <h4>FOLLOW US ON OUR PAGES.</h4>
                <div className="socials">
                    <a href="https://www.facebook.com/share/1HKLwMzcxu/" target="_blank" rel="noreferrer">
                       <FaFacebook style={{color: "#1877F2", fontSize: "24px"}}/>
                    </a>
                    <a href="https://www.instagram.com/revprincechukwuma?igsh=MWRseWlqanR2bmEzdg==" target="_blank" rel="noreferrer">
                       <FaInstagram style={{color: "#E1306C", fontSize: "24px"}}/>
                    </a>
                    <a href="https://youtube.com/@revprincechukwuma?si=CxVnncPj1KrQ62eC" target="_blank" rel="noreferrer">
                       <FaYoutube style={{color: "#FF0000", fontSize: "24px"}}/>
                    </a>
                    <a href="https://www.tiktok.com/@revprincechukwuma?_r=1&_t=ZS-944QMEXZI4Q" target="_blank" rel="noreferrer">
                       <FaTiktok style={{color: "#ffffff", fontSize: "24px"}}/>
                    </a>
                    <a href="https://x.com/revprincechuks" target="_blank" rel="noreferrer">
                       <FaTwitter style={{color: "#1DA1F2", fontSize: "24px"}}/>
                    </a>
                    <a href="https://audiomack.com/revprincechukwuma" target="_blank" rel="noreferrer">
                        <SiAudiomack style={{color: "#FFA500", fontSize: "24px"}}/>
                    </a>
                </div>
                <h3>Rev Prince Chukwuma</h3>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 REV PRINCE CHUKWUMA</p>
                <p>CHAI! WHEN GOD DECIDES TO HELP A MAN...</p>
            </div>
        </div>
        </section>
    );
}