import powersound1 from "../../assests/images/powersound/powersound1.jpeg";
import powersound2 from "../../assests/images/powersound/powersound2.jpeg";
import powersound3 from "../../assests/images/powersound/powersound3.jpeg";
import powersound4 from "../../assests/images/powersound/powersound4.jpeg";
import powersound5 from "../../assests/images/powersound/powersound5.jpeg";


const galleryImages = [
    powersound1, powersound2, powersound3,
    powersound4, powersound5
]
export default function SoundGallery(){
    return(
        <div className="sound-gallery">
            <h2>Our work in action</h2>
            <p>A glimpse of events we have powered across Nigeria:</p>
            <div className="sound-gallery-grid">
                {galleryImages.map((img, index) => (
                   <img key={index} src={img} alt={`PowerSound System ${index + 1}`}/> 
                ))}
            </div>
        </div>
    );
}