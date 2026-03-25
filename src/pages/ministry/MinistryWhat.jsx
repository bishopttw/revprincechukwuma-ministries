import { Link } from "react-router-dom";

export default function MinistryWhat(){
    return(
        <div className="ministry-what">
            <h2>What he does</h2>
            <p>A ministry that covers every area of life:</p>
            <div className="what-grid">

                <div className="what-card">
                    <h3>Morning Prayers</h3>
                    <p>
                        Every morning, Ven. Prince Chukwuma leads a live prayer session
                        streamed across YouTube, Facebook, Instagram, and TikTok.
                        Thousands join daily to receive the Word and start their day
                        with God.
                    </p>
                </div>

                <div className="what-card">
                    <h3>Conferences & seminars</h3>
                    <p>
                        Through the global business & prayer Conferences and RCBA,
                        he equips entrepreneurs and professionals with biblical wisdom
                        and practical business strategies twice every year.
                    </p>
                    <Link to="/rcba">Learn More</Link>
                </div>

                <div className="what-card">
                    <h3>Interchurch Ministry</h3>
                    <p>
                        Ven. Prince Chukwuma has ministered in churches across Nigeria
                        and beyond, carrying the Word of God to congregations far and
                        near with the same fire and dedication.
                    </p>
                </div>
            </div>
        </div>
    );
}