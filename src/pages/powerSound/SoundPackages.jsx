export default function SoundPackages(){
    return(
        <div className="sound-packages">
            <h2>Our Packages</h2>
            <p>Choose a package that fits your event or reach out for a custom quote:</p>

            <div className="packages-grid">
                <div className="package-card">
                    <h3>Basic Pack</h3>
                    <p className="package-tag">small indoor events</p>
                    <ul>
                        <li>Sound system & system</li>
                        <li>Basic stage lighting</li>
                    </ul>
                    <a href="https://wa.me/2348039512515" target="_blank" rel="noreferrer">Request a quote</a>
                </div>

                <div className="package-card package-featured">
                    <h3>Standard Pack</h3>
                    <p className="package-tag">
                        medium events & conferences
                    </p>
                    <ul>
                        <li>Full Sound System</li>
                        <li>Professional stage lighting</li>
                        <li>stage setup</li>
                    </ul>
                    <a href="https://wa.me/2348039512515" target="_blank" rel="noreferrer">Request a quote</a>
                </div>

                <div className="package-card">
                    <h3>Full Pack</h3>
                    <p className="package-tag">Large Outdoor Events</p>
                    <ul>
                        <li>Complete Sound System</li>
                        <li>Full Stage Lighting</li>
                        <li>Large Stage Construction</li>
                        <li>Tents & Canopies</li>
                        <li>Media Coverage</li>
                        <li>Full Technical Team</li>
                    </ul>
                    <a href="https://wa.me/2348039512515" target="_blank" rel="noreferrer">Request a Quote</a>
                </div>

                <div className="package-card package-custom">
                    <h3>Custom Pack</h3>
                    <p className="package-tag">Your Event, Your Terms</p>
                    <p>Have something specific in mind? Tell us exactly what you need 
                       and we will build a package around your event and budget.
                    </p>
                    <a href="https://wa.me/2348039512515" target="_blank" rel="noreferrer">Let's Talk</a>
                </div>
            </div>
        </div>
    );
}