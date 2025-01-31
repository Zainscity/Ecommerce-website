import Delivery from "../delivery/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import Cartcheckout from "./cartcheckout";

export default function Cart(){
    
    return( 
    <div>
        <Navbar bgColor="bg-white"/> 
        <img src="/cart.png" className="flex" alt="img" />  
        <Cartcheckout/>
        <Delivery/>
        <Footer/>
    </div>
        )};