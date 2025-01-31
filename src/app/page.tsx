
import HeroSection from "./components/HeroSec/page";
import Featured from "./components/featuredproduct/page";
import Toppicks from "./components/toppicks/page";
import NewArrival from "./components/new-arrival/page";
import Blog from "./components/blog/section";
import Insta from "./components/insta/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <div>
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
