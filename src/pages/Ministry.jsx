import MinistryHero from "./ministry/MinistryHero";
import MinistryAbout from "./ministry/MinistryAbout";
import MinistryWhat from "./ministry/MinistryWhat";
import MinistryVideo from "./ministry/MinistryVideo";
import MinistryGallery from "./ministry/MinistryGallery";
import MinistryFollow from "./ministry/MinistryFollow";
import Footer from "../components/Footer";
import "../styles/Ministry.css";

export default function Ministry(){
    return(
        <>
        <MinistryHero/>
        <MinistryAbout/>
        <MinistryWhat/>
        <MinistryVideo/>
        <MinistryGallery/>
        <MinistryFollow/>
        <Footer/>
        </>
    );
}