import Delivery from "../delivery/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import Blogposts from "./posts";

export default function Blog(){
    return(
        <div>
        <Navbar bgColor="bg-white"/> 
        <img src="/blogtitle.png" className="flex" alt="img" />  
        <Blogposts/>
        <Delivery/>
        <Footer/>
        </div>
    )
}