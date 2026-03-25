export default function SoundVideo(){
    return(
        <div className="sound-video">
            <h2>Watch us in action</h2>
            <p>See how we set up and deliver excellence at every event:</p>
            <div className="video-grid">
                <div className="video-wrap">
                    <h3>Stage Setup</h3>
                    <iframe 
                    src="https://www.youtube.com/embed/f2RWmMgH0RU"
                    title="PowerSound Stage Setup"
                    allowFullScreen
                    ></iframe>
                </div>

                <div className="video-wrap">
                    <h3>LED Screen Setup</h3>
                    <iframe 
                    src="https://www.youtube.com/embed/s0yfthUJnrY"
                    title="PowerSound LED Screen Setup"
                    allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}