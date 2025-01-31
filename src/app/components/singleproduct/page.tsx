import Delivery from "../delivery/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import OrderDetail from "./order";
import Related from "./related";

export default function OrderPage(){
    return(
        <div>
            <Navbar bgColor="bg-white" />
            <OrderDetail/>
            <Related/>
            <Delivery/>
            <Footer/>
        </div>
    )
}