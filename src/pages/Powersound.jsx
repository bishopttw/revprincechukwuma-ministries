import SoundHero from "../pages/powerSound/SoundHero";
import SoundAbout from "../pages/powerSound/SoundAbout";
import SoundServices from "../pages/powerSound/SoundServices";
import SoundPackages from "../pages/powerSound/SoundPackages";
import SoundWhy from "../pages/powerSound/SoundWhy";
import SoundGallery from "../pages/powerSound/SoundGallery";
import SoundCTA from "../pages/powerSound/SoundCTA";
import SoundVideo from "../pages/powerSound/SoundVideo";
import Footer from "../components/Footer";
import "../styles/Sound.css";
export default function Powersound(){
    return(
        <>
          <SoundHero/>
          <SoundAbout/>
          <SoundServices/>
          <SoundPackages/>
          <SoundWhy/>
          <SoundGallery/>
          <SoundVideo/>
          <SoundCTA/>
          <Footer/>
        </>
    );
}