import Delivery from "../delivery/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import Form from "./form";

export default function MyAccount() {
    return (
      <div>
        <Navbar bgColor="bg-white" />
        <img src="/account.png" className="flex" alt="img" />
        

        <Form/>
        <Delivery/>
        <Footer/>
      </div>
    
    );
  }
  