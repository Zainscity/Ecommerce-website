import Delivery from "../delivery/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import Contactdet from "./contactdet";

export default function Contact() {
    return (
      <div>
        <Navbar bgColor="bg-white" />
        <img src="/contact.png" className="flex" alt="img" />
        <Contactdet/>
        <Delivery/>
        <Footer/>
        </div>
    
    );
  }
  