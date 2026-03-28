import Footer from "../components/Footer";
import RcbaHead from "./rcba/RcbaHead";
import RcbaHis from "./rcba/RcbaHis";
import RcbaGallery from "./rcba/RcbaGallery";
import RcbaMission from "./rcba/RcbaMission";
import RcbaOffers from "./rcba/RcbaOffers";
import RcbaCall from "./rcba/RcbaCall";
import "../styles/Rcba.css";

export default function Rcba(){
    return(
        <>
        <RcbaHead/>
        <RcbaHis/>
        <RcbaGallery/>
        <RcbaMission/>
        <RcbaOffers/>
        <RcbaCall/>
        <Footer/>
        </>
    );
}

// This page is for GBPC (Global Business & Prayer Conference)
// powered by RCBA - named rcba internally for consistency