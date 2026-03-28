import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";
export default function MinistryFollow(){
    return(
        <div className="ministry-follow">
            <h2>Follow His Ministry</h2>
            <p>Stay connected and never miss a teaching, prayer session, or update.
               Join thousands following the ministry across all platforms:
            </p>
            <div className="follow-grid">

                <a href="https://www.facebook.com/share/1HKLwMzcxu/" target="_blank" rel="noreferrer" className="follow-card">
                    <FaFacebook className="follow-icon facebook"/>
                    <h3>Facebook</h3>
                    <p>Daily teachings and live streams</p>
                </a>

                <a href="https://www.instagram.com/revprincechukwuma?igsh=MWRseWlqanR2bmEzdg==" target="_blank" rel="noreferrer" className="follow-card">
                    <FaInstagram className="follow-icon instagram"/>
                    <h3>Instagram</h3>
                    <p>Inspiring posts and updates</p>
                </a>

                <a href="https://youtube.com/@revprincechukwuma?si=CxVnncPj1KrQ62eC" target="_blank" rel="noreferrer" className="follow-card">
                    <FaYoutube className="follow-icon youtube"/>
                    <h3>YouTube</h3>
                    <p>Full sermons, teachings and live streams</p>
                </a>

                <a href="https://www.tiktok.com/@revprincechukwuma?_r=1&_t=ZS-944QMEXZI4Q" target="_blank" rel="noreferrer" className="follow-card">
                    <FaTiktok className="follow-icon tiktok"/>
                    <h3>TikTok</h3>
                    <p>Short clips, highlights and live streams</p>
                </a>

                <a href="https://x.com/revprincechuks" target="_blank" rel="noreferrer" className="follow-card">
                    <FaTwitter className="follow-icon twitter"/>
                    <h3>Twitter / X</h3>
                    <p>Thoughts and updates</p>
                </a>

                <a href="https://audiomack.com/revprincechukwuma" target="_blank" rel="noreferrer" className="follow-card">
                    <SiAudiomack className="follow-icon audiomack"/>
                    <h3>Audiomack</h3>
                    <p>Audio messages and teachings</p>
                </a>

            </div>
        </div>
    );
}