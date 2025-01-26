import { FaRegClock } from "react-icons/fa6";

export default function Blog() {
    const blogs = [
      { title: "Going all-in with millennial design", date: "12th Oct 2022", readTime: "5 min", img: "blog1.jpeg" },
      { title: "Going all-in with millennial design", date: "12th Oct 2022", readTime: "5 min", img: "blog2.jpeg" },
      { title: "Going all-in with millennial design", date: "12th Oct 2022", readTime: "5 min", img: "blog3.jpeg" },
    ];
  
    return (
      <section className="p-8 text-center bg-white text-black">
        <h2 className="text-4xl text-black font-bold mt-4 mb-4">Our Blogs</h2>
        <h2 className="text-gray-600 mb-12 opacity-60 text-xl">Find a bright idea to suit your taste with our great selection.</h2>
        <div className="grid grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="text-center">
              <img src={blog.img} alt={blog.title} className="mx-auto w-58" />
              <h3 className="mt-4 text-lg font-light mb-5">{blog.title}</h3>
              <a href="/blog" className="text-2xl font-semibold border-b-5 border-black mb-4 text-black">Read More</a>

              <p className="text-gray-500"> { blog.readTime} • {blog.date}</p>
            </div>
          ))}
        </div>
        <a href="/blog" className="text-2xl mb-4 mt-8 inline-block text-black border-b-2 border-black">View All Post</a>
      </section>
    );
  };
  