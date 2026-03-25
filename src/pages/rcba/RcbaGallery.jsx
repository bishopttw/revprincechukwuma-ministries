import rcba1 from "../../assests/images/rcba/rcba1.jpeg";
import rcba2 from "../../assests/images/rcba/rcba2.jpeg";
import rcba3 from "../../assests/images/rcba/rcba3.jpeg";
import rcba4 from "../../assests/images/rcba/rcba4.jpeg";
import rcba5 from "../../assests/images/rcba/rcba5.jpeg";
import rcba6 from "../../assests/images/rcba/rcba6.jpeg";
import rcba7 from "../../assests/images/rcba/rcba7.jpeg";
import rcba8 from "../../assests/images/rcba/rcba8.jpeg";
import rcba9 from "../../assests/images/rcba/rcba9.jpeg";
import rcba10 from "../../assests/images/rcba/rcba10.jpeg";
import rcba11 from "../../assests/images/rcba/rcba11.jpeg";
import rcba12 from "../../assests/images/rcba/rcba12.jpeg";
import rcba13 from "../../assests/images/rcba/rcba13.jpeg";
import rcba14 from "../../assests/images/rcba/rcba14.jpeg";
import rcba15 from "../../assests/images/rcba/rcba15.jpeg";

const galleryImages = [
    rcba1, rcba2, rcba3, rcba4, rcba5,
    rcba6, rcba7, rcba8, rcba9, rcba10,
    rcba11, rcba12, rcba13, rcba14, rcba15
];

export default function RcbaGallery(){
    return(
        <div className="rcba-gallery">
            <h3>Moments From Our Last Gathering</h3>
            <p>The conference features moments of:</p>
            <ul>
                <li>Business teachings and mentorship sessions</li>
                <li>Prayer and prophetic alignment</li>
                <li>Networking and idea exchange</li>
                <li>Fellowship and celebration</li>
            </ul>
            <div className="gallery-grid">
                {galleryImages.map((img, index) => (
                    <img key={index} src={img} alt={`RCBA conference moment ${index + 1}`}/>
                ))} 
            </div>
        </div>
    );
}