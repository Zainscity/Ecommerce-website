import { FaRegClock, FaRegCalendar } from "react-icons/fa6";

export default function Blog() {
  const blogs = [
    {
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      readTime: "5 min",
      Image: "blog1.jpeg",
    },
    {
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      readTime: "5 min",
      Image: "blog2.jpeg",
    },
    {
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      readTime: "5 min",
      Image: "blog3.jpeg",
    },
  ];

  return (
    <section className="p-8 text-center bg-white text-black">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold mt-4 mb-4">Our Blogs</h2>
      <h2 className="text-gray-600 mb-12 opacity-60 text-xl">
        Find a bright idea to suit your taste with our great selection.
      </h2>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="text-center bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={blog.Image}
              alt={blog.title}
              className="mx-auto mb-4 w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-lg font-light mb-4">{blog.title}</h3>
            <a
              href="/components/blog"
              className="text-lg font-semibold border-b-2 border-black mb-4 inline-block text-black"
            >
              Read More
            </a>
            <div className="text-gray-500 flex justify-center items-center gap-4 mt-4">
              {/* Clock Icon and Read Time */}
              <span className="flex items-center gap-2">
                <FaRegClock /> {blog.readTime}
              </span>
              {/* Calendar Icon and Date */}
              <span className="flex items-center gap-2">
                <FaRegCalendar /> {blog.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Posts Link */}
      <a
        href="/components/blog"
        className="text-lg mt-12 inline-block text-black border-b-2 border-black hover:text-gray-700 hover:border-gray-700 transition"
      >
        View All Posts
      </a>
    </section>
  );
}
