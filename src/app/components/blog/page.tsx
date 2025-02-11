import Image from "next/image";
import Delivery from "../delivery/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import Blogposts from "./posts";

export default function Blog() {
  return (
    <div>
      <Navbar bgColor="bg-white" />
      <Image
        src="/blogtitle.png"
        width={800} // Add appropriate width
        height={200} // Add appropriate height
        alt="Blog Title"
        className="w-full h-auto"
      />
      <Blogposts />
      <Delivery />
      <Footer />
    </div>
  );
}