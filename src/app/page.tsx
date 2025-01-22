import Image from "next/image";
import {CiUser} from 'react-icons/ci'
import Navbar from "./components/navbar/page";
import HeroSection from "./components/HeroSec/page";
import { MdFeaturedPlayList } from "react-icons/md";
import Featured from "./components/featuredproduct/page";
import Toppicks from "./components/toppicks/page";
import NewArrival from "./components/new-arrival/page";
import Blog from "./components/blog/page";
import Insta from "./components/insta/page";
import Footer from "./components/footer/page";
import Delivery from "./components/delivery/page";

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <HeroSection/>
      <Featured/>
      <Toppicks/>
      <NewArrival/>
      <Blog/>
      <Insta/>
      <Footer/>
    </div>
  );
}
