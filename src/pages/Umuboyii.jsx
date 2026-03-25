import UmuboyiiHero from "./umuboyii/UmuboyiiHero";
import UmuboyiiAbout from "./umuboyii/UmuboyiiAbout";
import UmuboyiiMeet from "./umuboyii/UmuboyiiMeet";
import UmuboyiiPurpose from "./umuboyii/UmuboyiiPurpose";
import UmuboyiiImpact from "./umuboyii/UmuboyiiImpact";
import UmuboyiiCta from "./umuboyii/UmuboyiiCta";
import Footer from "../components/Footer";
import UmuboyiiGallery from "./umuboyii/UmuboyiiGallery";
import "../styles/Umuboyii.css";

export default function Umuboyii() {
  return (
    <>
      <UmuboyiiHero/>
      <UmuboyiiAbout/>
      <UmuboyiiMeet/>
      <UmuboyiiPurpose/>
      <UmuboyiiImpact/>
      <UmuboyiiGallery/>
      <UmuboyiiCta/>
      <Footer/>
    </>
  );
}
