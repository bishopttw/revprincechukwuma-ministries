export default function MinistryVideo(){
    return(
        <div className="ministry-video">
            <h2>Watch him minister</h2>
            <p>Experience the word through one of his most watched teachings:</p>
            <div className="ministry-video-wrap">
                <iframe 
                    src="https://www.youtube.com/embed/JtRkkdG4mec" 
                    title="Ven. Prince Chukwuma Ministering"
                    frameborder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}