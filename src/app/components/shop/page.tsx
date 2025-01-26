import Delivery from "../delivery/page";
import FilterBar from "../filter/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import Shopitems from "../shopitems/page";

export default function About() {
    return (
      <div>
        <Navbar bgColor="bg-white" />
        <img src="/shoptitle.png" className="flex" alt="img" />
        

        <FilterBar/>
        <Shopitems/>
        <Delivery/>
        <Footer/>
      </div>
    
    );
  }
  