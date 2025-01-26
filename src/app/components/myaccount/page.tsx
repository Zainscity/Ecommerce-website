import Delivery from "../delivery/page";
import FilterBar from "../filter/page";
import Footer from "../footer/page";
import Navbar2 from "../navbar2/page";
import Shopitems from "../shopitems/page";

export default function MyAccount() {
    return (
      <div>
        <Navbar2/>
        <img src="/account.png" className="flex" alt="img" />
        

        <FilterBar/>
        <Shopitems/>
        <Delivery/>
        <Footer/>
      </div>
    
    );
  }
  