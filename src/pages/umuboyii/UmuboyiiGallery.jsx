    import umuboyii1 from "../../assests/images/umuboyii/umuboyii1.jpeg";
    import umuboyii2 from "../../assests/images/umuboyii/umuboyii2.jpeg";
    import umuboyii3 from "../../assests/images/umuboyii/umuboyii3.jpeg";
    import umuboyii4 from "../../assests/images/umuboyii/umuboyii4.jpeg";
    import umuboyii5 from "../../assests/images/umuboyii/umuboyii5.jpeg";
    import umuboyii6 from "../../assests/images/umuboyii/umuboyii6.jpeg";
    import umuboyii7 from "../../assests/images/umuboyii/umuboyii7.jpeg";
    import umuboyii8 from "../../assests/images/umuboyii/umuboyii8.jpeg";
    import umuboyii9 from "../../assests/images/umuboyii/umuboyii9.jpeg";
    import umuboyii10 from "../../assests/images/umuboyii/umuboyii10.jpeg";
    import umuboyii11 from "../../assests/images/umuboyii/umuboyii11.jpeg";
    import umuboyii12 from "../../assests/images/umuboyii/umuboyii12.jpeg";
    import umuboyii13 from "../../assests/images/umuboyii/umuboyii13.jpeg";
    import umuboyii14 from "../../assests/images/umuboyii/umuboyii14.jpeg";
    import umuboyii15 from "../../assests/images/umuboyii/umuboyii15.jpeg";

    const galleryImages = [
        umuboyii1, umuboyii2, umuboyii3, umuboyii4,
        umuboyii5, umuboyii6, umuboyii7, umuboyii8,
        umuboyii9, umuboyii10, umuboyii11, umuboyii12,
        umuboyii13, umuboyii14, umuboyii15
    ];
    export default function UmuboyiiGallery(){
    return(
        <div className="umuboyii-gallery">
            <h3>Moments from our fellowship</h3>
            <div className="umuboyii-gallery-grid">
                {galleryImages.map((image, index) => (
                    <img key={index} src={image} alt={`umuboyii na ndi og fellowship`}/>
                ))}
            </div>
        </div>
    );
}