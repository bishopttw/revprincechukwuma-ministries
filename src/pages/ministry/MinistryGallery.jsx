import ministry1 from "../../assests/images/ministry/ministry1.jpeg";
import ministry2 from "../../assests/images/ministry/ministry2.jpeg";
import ministry3 from "../../assests/images/ministry/ministry3.jpeg";
import ministry4 from "../../assests/images/ministry/ministry4.jpeg";
import ministry5 from "../../assests/images/ministry/ministry5.jpeg";
import ministry6 from "../../assests/images/ministry/ministry6.jpeg";

const galleryImages = [
    ministry1, ministry2, ministry3,
    ministry4, ministry5, ministry6
];

export default function MinistryGallery(){
    return(
        <div className="ministry-gallery">
            <h2>Moments In Ministry</h2>
            <div className="ministry-gallery-grid">
                {galleryImages.map((image, index) => (
                    <img key={index} src={image} alt={`Ministry moment ${index + 1}`}/>
                ))}
            </div>
        </div>
    );
}